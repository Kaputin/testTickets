import TicketList from "@/components/ticket-list/TicketList.vue";
import Modal from "@/components/modal/Modal.vue";
import {mapGetters} from 'vuex';
export default {
    name: 'App',
    computed: mapGetters(['allTickets']),
    components: {
        Modal,
        TicketList
    },
}