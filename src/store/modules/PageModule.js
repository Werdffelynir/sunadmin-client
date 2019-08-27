import axios from 'axios';

const DATA_SERVER_URL = '';

const PageModule = {
    state: {
        header: {
            title: '',
            body: ''
        },
        cards: [
            {title: '', text: ''},
            {title: '', text: ''},
            {title: '', text: ''},
        ],
        mobileAdaptive: {
            title: '',
            body: ''
        },
        applicationsCreators: {
            title: '',
            body: '',
            developers: [
                {name: '', post: '', photo: ''},
                {name: '', post: '', photo: ''},
                {name: '', post: '', photo: ''},
            ]
        },
        environmentForApplication: {
            title: '',
            body: ''
        },
    },

    mutations: {
        loadData(state, data) {
            state = {...state, ...data}
        }
    },

    actions: {
        loadDataServer({commit}) {
            fetch(' http://localhost:3005/chunks?key=page')
                .then((response) => response.json())
                .then((response) => {
                    console.log('response', response)
                    if (response.ok && response.result) {
                        const result = JSON.parse(response.result).data || [];
                        const data = {cards: []};

                        result.forEach((it, i) => {
                            switch (it.name) {
                                case 'header' :
                                    data.header = it;
                                    break;
                                case 'mobileAdaptive' :
                                    data.mobileAdaptive = it;
                                    break;
                                case 'applicationsCreators' :
                                    data.applicationsCreators = it;
                                    break;
                                case 'environmentForApplication' :
                                    data.environmentForApplication = it;
                                    break;
                                default:
                                    if (it.name.indexOf('card-') === 0)
                                        data.cards.push(it);
                            }
                        });

                        commit('loadData', data);
                    }
                });
        },
    },

    getters: {
        getHeader (state) { return state.header },
        getCard (state) { return state.cards },
        getMobileAdaptive (state) { return state.mobileAdaptive },
        getApplicationsCreators (state) { return state.applicationsCreators },
        getEnvironmentForApplication (state) { return state.environmentForApplication },
    }
};

export default PageModule;