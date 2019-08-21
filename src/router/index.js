import Vue from 'vue';
import Router from 'vue-router';

import NotFound from '../components/common/404.vue';
import PageComponent from '../components/Page.vue';


Vue.use(Router);

export default new Router({
    routes: [
        {path: '/',             name: 'page',           component: PageComponent},
        {path : '*',                                    component: NotFound},
    ]
});