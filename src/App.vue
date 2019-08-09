<template>
    <div id="app">
        <!--  <img src="./assets/logo.png"> -->
        <div class="table">

            <div id='sidebar' class="width-25 valign-top">

                <div class="text-center">
                    <img src="./public/images/logo.png" >
                </div>

                <ul>
                    <li><a href="#/">Home</a></li>
                    <li><a href="#/login">Login</a></li>
                    <li><a href="#/profile">Profile</a></li>
                    <li><a href="#/404">404</a></li>
                </ul>

            </div>

            <div class="valign-top">

                <div id='header'>
                    <h1>Demo Client</h1>
                </div>

                <div id='content' >
                    <router-view></router-view>
                </div>

            </div>

        </div>

    </div>
</template>

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
</style>

<script>

    export default {
        name: 'app',
    }

</script>
