import Vue from 'vue'
import Vuex from 'vuex'
import PageModule from './modules/PageModule'


Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    modules: {
        PageModule,
    },
});

export default store;
