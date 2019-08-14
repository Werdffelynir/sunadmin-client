import Vue from 'vue'
import Vuex from 'vuex'
import {HIDE_ITEM_MUTATION, SET_ITEM_MUTATION} from "./mutation-types";
// import * as getters from './getters';
// import * as actions from './actions';
// import * as mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
    
    state: {
        count: 0,
        items: [
            {id: 1, name: 'New Task', done: false, visible: true},
            {id: 2, name: 'New Task', done: true, visible: true}
        ],
    },
    
    mutations: {
        increment: state => state.count ++,
        decrement: state => state.count --,
        [SET_ITEM_MUTATION]: (state, payload) => state.items.push(payload.item),
        [HIDE_ITEM_MUTATION]: (state, payload) => {
            state.items.find((item) => {
                if (item.id === payload.id) item.visible = false
            })
        },
    },

    getters: {
        count: (state, getters) => state.count,
        getitem: (state, getters) => id => state.items.find(item => item.id === id),
        getitems: (state, getters) => state.items,
        getitemsdone: (state, getters) => state.items.filter(item => item.done),
    },

});

export default store;



/*
const state = {
    count: 0,
    item: [],
    isAuth: false,
    ui: {
        sidebar: true
    }
};

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});

if (module.hot) {
    module.hot.accept([
        './getters',
        './actions',
        './mutations'
    ], () => {
        store.hotUpdate({
            getters: require('./getters'),
            actions: require('./actions'),
            mutations: require('./mutations')
        })
    })
}

export default store;
*/