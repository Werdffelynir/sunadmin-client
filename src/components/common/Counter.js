const Counter = {
    name: 'counter',
    template: `<div>{{ count }}</div>`,
    computed: {
        count() {
            return this.$store.state.count;
        }
    }
};

export default Counter;