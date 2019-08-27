<template>
    <div id='page'>

        <div>
            <button class="v-btn mt-4" v-on:click="changeLanguage">
                <span :class="language === 'en' ? 'language' : ''">EN</span>
                | <span :class="language === 'ru' ? 'language' : ''">RU</span>
            </button>
        </div>

        <h1 class="text-center">{{ header.title }}</h1>
        <p class="text-center">{{ header.body }}</p>

        <section id="three_cards">
            <div>
                <span v-for="card in cards">
                    <Card :title="card.title">
                        <p>{{ card.body }}</p>
                    </Card>
                </span>
            </div>
        </section>

        <section id="mobile">
            <h1>{{ mobileAdaptive.title }}</h1>
            <p class="text-justify">
                {{ mobileAdaptive.body }}
            </p>
        </section>

        <section id="applications">

            <h1>{{ applicationsCreators.title }}</h1>
            <p class="text-justify">
                {{ applicationsCreators.body }}
            </p>

            <VRow v-if="Array.isArray(applicationsDevelopers)" class="text-center">
                <VCol>
                    <img :src="'../public/images/' + findApplicationsDeveloper('author_1_photo').value" :width="168" alt="Developer">
                    <p>{{ findApplicationsDeveloper('author_1_name').value }} </p>
                    <p>{{ findApplicationsDeveloper('author_1_post').value }} </p>
                </VCol>
                <VCol>
                    <img :src="'../public/images/' + findApplicationsDeveloper('author_2_photo').value" :width="168" alt="Developer">
                    <p>{{ findApplicationsDeveloper('author_2_name').value }} </p>
                    <p>{{ findApplicationsDeveloper('author_2_post').value }} </p>
                </VCol>
                <VCol>
                    <img :src="'../public/images/' + findApplicationsDeveloper('author_1_photo').value" :width="168" alt="Developer">
                    <p>{{ findApplicationsDeveloper('author_3_name').value }} </p>
                    <p>{{ findApplicationsDeveloper('author_3_post').value }} </p>
                </VCol>
            </VRow>

        </section>

        <section id="environment">
            <h1>{{ environmentForApplication.title }}</h1>
            <p class="text-justify">
                {{ environmentForApplication.body }}
            </p>
        </section>

    </div>
</template>

<script>
    import Card from './common/Card.vue';


    export default {

        name: 'Page',

        props: [],

        data() {
            this.$store.dispatch('loadDataServer');
            return {

            }
        },

        computed: {
            cards () { return this.$store.getters.getCards },
            header () { return this.$store.getters.getHeader },
            mobileAdaptive () { return this.$store.getters.getMobileAdaptive },
            applicationsCreators () { return this.$store.getters.getApplicationsCreators },
            applicationsDevelopers () { return JSON.parse(this.$store.getters.getApplicationsCreators.options) || [] },
            environmentForApplication () { return this.$store.getters.getEnvironmentForApplication },
            language () { return this.$store.getters.getLanguage },
        },

        methods: {
            findApplicationsDeveloper (key) {
                return this.applicationsDevelopers.find(it => it.name === key) || { value: null }
            },
            changeLanguage () {
                this.$store.commit('setLanguage', this.$store.getters.getLanguage === 'en' ? 'ru' : 'en');
                this.$store.dispatch('loadDataServer');
            },
        },

        created () {},

        mounted() {},

        components: {
            Card,
        }

    }
</script>

<style>
    section {
        min-height: 100vh;
    }

    .language {
        color: #b47400;
    }
</style>