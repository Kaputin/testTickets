import {mapMutations} from "vuex";
const parseTicketToPost = (data) => {
    return {
        "user": {
            "name": data.user.name,
            "email": data.user.email,
            "avatar": data.user.avatar
        },
        "body_subject": data.bodySubject,
        "subject": data.subject,
        "status": data.status,
        "priority": data.priority,
        "ticket_number": data.ticketNumber
    };
};

export default {
    name: "Modal",
    props: ['tickets'],

    data() {
        return {
            formOpen: false,
            errorMsg: null,
            submitTicket: {},
            user: {
                name: null,
                email: null,
            },
            bodySubject: null,
            subject: null,
            priority: null,
            status: null
        }
    },
    methods: {
        ...mapMutations (["createTicket"]),
        openForm() {
            this.formOpen = !this.formOpen;
        },
        closeForm(event) {
            event.preventDefault();
            this.formOpen = !this.formOpen;
            this.user.name = this.user.email = this.bodySubject = this.subject = this.priority = this.status = '';
            this.errorMsg = null;
        },
        onSubmit(event) {
            event.preventDefault();
            if(this.errorMsg) {
                this.errorMsg = null;
            }

            if(!this.user.name || !this.user.email || !this.bodySubject || !this.subject || !this.status || !this.priority) {
                this.errorMsg = 'Необходимо заполнить все поля';
            }


            this.submitTicket = {
                user: {
                    name: this.user.name,
                    email: this.user.email,
                    avatar: 'https://lh3.googleusercontent.com/ogw/ADGmqu9mwjd_DnKM_J5VCm0fPeUuIA1p-MU6rR7Fi0wV=s192-c-mo'
                },
                bodySubject: this.bodySubject,
                subject: this.subject,
                status: Number(this.status),
                priority: Number(this.priority),
                ticketNumber: this.tickets.length + 1
            };

            fetch('https://run.mocky.io/v3/62caa179-7226-47a7-bae5-b569079d6767', {
                method: 'POST',
                body: JSON.stringify(parseTicketToPost(this.submitTicket)),
                headers: {
                    'Content-type': 'application/JSON, charset=UTF-8'
                },
            })
                .catch((error) => {
                    this.errorMsg = error;
                });

            if(!this.errorMsg) {
                this.formOpen = !this.formOpen;
                this.user.name = this.user.email = this.bodySubject = this.subject = this.priority = this.status = '';
                this.createTicket(this.submitTicket);
            }
        },
    },
}