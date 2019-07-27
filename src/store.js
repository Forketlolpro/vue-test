import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: null,
        tableHeaders: ['id', 'name', 'secondName', 'age', 'rating'],
        searchQuery: '',
        sortKey: '',
        sortOrders: null
    },
    getters: {
        USERS: state => {
            return state.users;
        },
        TABLEHEADERS: state => {
            return state.tableHeaders;
        },
        SEARCHQUERY: state => {
            return state.searchQuery;
        },
        SORTKEY: state => {
            return state.sortKey;
        },
        SORTORDERS: state => {
            return state.sortOrders;
        },

    },
    mutations: {
        SET_USERS: (state, payload) => {
            state.users = payload;
        },
        SET_TABLEHEADERS: (state, payload) => {
            state.tableHeaders = payload;
        },
        SET_SEARCHQUERY: (state, payload) => {
            state.searchQuery = payload;
        },
        SET_SORTKEY: (state, payload) => {
            state.sortKey = payload;
        },
        SET_SORTORDERS: (state, payload) => {
            if (typeof payload == 'string') {
                state.sortOrders[payload]*=-1;
            } else {
                state.sortOrders = payload;
            }
        }
    },
    actions: {
        SET_USERS: (context, payload) => {
            context.commit('SET_USERS', payload)
        },
        SET_TABLEHEADERS: (context, payload) => {
            context.commit('SET_TABLEHEADERS', payload)
        },
        SET_SEARCHQUERY: (context, payload) => {
            context.commit('SET_SEARCHQUERY', payload)
        },
        SET_SORTKEY: (context, payload) => {
            context.commit('SET_SORTKEY', payload)
        },
        SET_SORTORDERS: (context, payload) => {
            context.commit('SET_SORTORDERS', payload)
        }

    },
})
