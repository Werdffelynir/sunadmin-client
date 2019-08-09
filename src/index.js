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




// export default
/*
import _ from 'lodash';
import './styles/style.css';
import Icon from './public/images/icon.png';

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = '<h1>Webpack friend</h1>'; // _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.width = 258;
    myIcon.height = 258;
    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());*/

// import App from "./components/App";

/*
import Vue from 'vue';

const App = new Vue({

    el: '#root',

    render (h) {

        this.hi = 'HI a';

        console.log(h);
        return h('div', this.hi)
    }
});

export default App;
*/



