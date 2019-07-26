import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: null
    },
    getters: {
        USERS: state => {
            return state.users;
        }
    },
    mutations: {
        SET_USERS: (state, payload) => {
            state.users = payload;
        },
    },
    actions: {
        SET_USERS: (context, payload) => {
            context.commit('SET_USERS', payload)
        }

    },
})
