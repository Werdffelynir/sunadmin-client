<template>
    <div id="app">
        <VApp>
            <VNavigationDrawer app :width="sidebar ? 250 : 0">
                <Sidebar />
            </VNavigationDrawer>

            <VAppBar app >
                <div class="menu">
                    <router-link to="/">Home page</router-link>
                </div>
                <VSpacer></VSpacer>
                <VBtn v-on:click="sidebarToggle"> <MenuIcon /> </VBtn>
            </VAppBar>

            <VContent>
                <VContainer fluid>
                    <router-view></router-view>
                </VContainer>
            </VContent>

            <VFooter app>
                <VBtn icon> </VBtn>
            </VFooter>
        </VApp>
    </div>
</template>

<style>

    .menu a {
        text-transform: uppercase;
        font-size: 110%;
        padding: 6px 15px;
        text-decoration: none;
    }

    .menu a.router-link-exact-active {
        color: #b47400;
    }

</style>

<script>

    import Sidebar from './components/common/Sidebar.vue';

    export default {

        name: 'App',

        data: (vueAppComponent) => {
            return {
                sidebar: false,
            };
        },

        methods: {
            sidebarToggle() {
                this.sidebar = !this.sidebar;
            },
        },

        watch: {
            input_event(value) {
            }
        },

        computed: {},
        components: {
            Sidebar,
        },

    }

</script>
