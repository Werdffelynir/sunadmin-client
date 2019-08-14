<template>
    <div id='page'>

        <h1>{{ title }}</h1>
        <h3>Home count: {{ count }}</h3>

        <Counter></Counter>
        <Items></Items>
    </div>
</template>

<script>

    import Counter from './common/Counter.vue';
    import Items from './common/Items.vue';

    export default {

        name: 'Home',

        props: [],

        data () {
            console.log(this, this.$store);
            return {
                title: "Component - Home",
            }
        },

        methods: {
        },

        computed: {
            count () {
                return this.$store.state.count
            }
        },

        mounted() {},

        components: {
            Counter,
            Items,
        }

    }
</script>