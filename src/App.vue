<template>
    <div id="app">

        <div class="table">

            <div id='sidebar' class="width-25 valign-top">
                <div v-bind:class="[true ? 'text-center' : 'text-left']">
                    <img alt="logo" src="./public/images/logo.png" >
                </div>
                <ul>
                    <li v-for="(value, key) in menuItems" v-on:click="menuItemClick">
                        <a v-bind:class="{active: value === hash()}"
                           v-bind:href="'/#/' + value" >
                            {{ key.charAt(0).toUpperCase() + key.slice(1)}}
                        </a>
                    </li>
                    <li>
                        <a href="/#/some-else">Error 404</a>
                    </li>
                </ul>

                <div><input type="text" v-model="textSearch"> <button v-on:click="buttonClick"> button </button> </div>
            </div>

            <div class="valign-top">

                <div id='header'>
                    <div v-if="headerTitle">
                        <h1>{{headerTitle}}</h1>
                    </div>
                    <div v-else>
                        <h1>No name</h1>
                    </div>
                </div>

                <div id='content' v-bind:style="{backgroundColor: '#ccc', color: error404() ? 'red' : ''}">
                    <router-view></router-view>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
    import store from './store/index';

    const headerTitle = 'Demo Client';
    const menuItems = {
        home: '',
        login: 'login',
        profile: 'profile',

    };

    export default {
        name: 'app',

        data : (vueAppComponent) => {

            return {
                headerTitle: headerTitle,
                menuItems: menuItems,
                hash: () => location.hash.slice(2),
                error404: () => !Object.values(menuItems).includes(vueAppComponent.hash()),
                textSearch: '',
            };
        },

        methods: {
            // for event
            buttonClick (e) {
                e.target.parentNode.removeChild(e.target);
            },
            menuItemClick (e) {
                this.headerTitle = headerTitle + ' on: ' + e.target.textContent
            },
        },

        watch: {
            // textSearch: (value) => { this } // it wrong code - this is undefined
            textSearch  (value)  {
                const max = 5;
                this.textSearch = value.length > max ? value.slice(0, max) : value;
            }
        },

        computed: {
        },

    }

</script>

<style>
    a {
        color: #a6c103;
    }
    a:hover {
        color: #dbff03;
    }

    #sidebar {
        background-color: #3a3a3a;
        color: #d5e5ee;
    }
    #sidebar a {
        text-decoration: none;
        display: block;
        padding: 5px 15px;
        color: #a6c103;
    }
    #sidebar a:hover {
        background-color: #4f4f4f;
    }


    #header {
        background-color: #3a3a3a;
        color: #d5e5ee;
    }

    #content {
        color: #000;
    }

    .active {
        background-color: #4f4f4f;
    }
</style>