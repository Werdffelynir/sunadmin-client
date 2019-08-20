import Vue from 'vue';
import Router from 'vue-router';

import NotFound from '../components/common/404.vue';
import Home from '../components/Dashboard.vue';


Vue.use(Router);

export default new Router({
    routes: [
        {path: '/',             name: 'dashboard',      component: Home},
        {path : '*',                                    component: NotFound},
    ]
});