import { createStore } from 'vuex'
const store = createStore({
    actions: {},
    mutations: {
        createTicket(state, newTicket) {
            state.tickets.push(newTicket)
        },
    },
    state: {
        tickets: [],
    },
    getters: {
        allTickets(state) {
            return state.tickets
        }
    }
})

export default store;
