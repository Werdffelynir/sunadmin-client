import Vue from 'vue';
import store from './store';
import VueResource from 'vue-resource';
import router from './router/index';
import App from './App.vue';
import './styles/cssgrid.css';
import './styles/style.css';

Vue.config.productionTip = false;
Vue.use(VueResource);


new Vue({
    el: '#app',
    router,
    store,
    template: '<App />',
    components: {
        App
    }
});
