export default {
    name: "Ticket",
    props: ['ticket', 'index'],
    data() {
        return {
            srcImage: this.ticket.user.avatar,
            stateStatus: '',
            stateColor: '',
            statePriority: '',
            newDate: ''
        }
    },
    mounted() {
        switch(this.ticket.status) {
            case 0:
                this.stateStatus = 'Новый';
                this.stateColor = 'state__status-new';
                break;
            case 1:
                this.stateStatus = 'В обработке';
                this.stateColor = 'state__status-processing';
                break;
            case 2:
                this.stateStatus = 'Отложено';
                this.stateColor = 'state__status-postponed';
                break;
            case 3:
                this.stateStatus = 'Закрыто';
                this.stateColor = 'state__status-close';
                break;
            default:
                this.stateStatus = '';
                this.stateColor = '';
        }
        switch(this.ticket.priority) {
            case 0:
                this.statePriority = 'Низкий';
                break;
            case 1:
                this.statePriority = 'Средний';
                break;
            case 2:
                this.statePriority = 'Высокий';
                break;
            case 3:
                this.statePriority = 'Критический';
                break;
            default:
                this.statePriority = '';
        }
    },
}