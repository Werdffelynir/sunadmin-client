<template>
    <div>
        <h3>{{ count }}</h3>

        <button v-on:click="increment">Increment</button>
        <button v-on:click="decrement">Decrement</button>
    </div>
</template>

<script>

export default  {

    name: 'Counter',

    props: [],

    data () {
        return {}
    },

    computed: {
        count() {
            return this.$store.state.count;
        }
    },

    mounted() {},

    methods: {
        increment () {
            this.$store.commit('increment')
        },
        decrement () {
            this.$store.commit('decrement')
        }
    }
};

</script>