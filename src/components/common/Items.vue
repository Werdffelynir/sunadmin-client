<template>
    <div>
        <h3>List</h3>

        <button v-on:click="set">Add Item</button>

        <ul v-for="item in items">
            <li v-if="item.visible">
                <button class="bg-gray" v-on:click="rm(item.id)">Remove Item</button>
                <span>{{ item.id }}  {{ item.name }}</span>
            </li>
        </ul>

    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import {HIDE_ITEM_MUTATION, SET_ITEM_MUTATION} from "../../store/mutation-types";

    export default  {

        name: 'Items',

        props: [],

        data () {
            return {}
        },

        computed: mapState([
            'items'
        ]),

        mounted() {},

        methods: {
            set () {
                this.$store.commit(SET_ITEM_MUTATION, {
                    item: {id: this.items.length + 1, name: 'New Task', done: true, visible: true}
                });
/*
                this.$store.commit({
                    type: SET_ITEM_MUTATION,
                    item: {id: this.items.length + 1, name: 'New Task', done: true, visible: true}
                });*/
            },
            rm (id) {
                this.$store.commit(HIDE_ITEM_MUTATION, { id });
            }
        }
    };

</script>