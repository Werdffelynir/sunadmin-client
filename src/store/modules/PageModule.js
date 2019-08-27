const DATA_SERVER_URL = 'http://localhost:3005/chunks?key=page';

const PageModule = {
    state: {
        ui: {
            language: 'en'
        },
        header: {
            title: '',
            body: ''
        },
        cards: [
            {title: '', body: ''},
            {title: '', body: ''},
            {title: '', body: ''},
        ],
        mobileAdaptive: {
            title: '',
            body: ''
        },
        applicationsCreators: {
            title: '',
            body: '',
            options: '{}'
        },
        environmentForApplication: {
            title: '',
            body: ''
        },
    },

    mutations: {
        loadData(state, data) {
            Object.keys(data).forEach((key) => {
                state[key] = {...state[key], ...data[key] };
            });
        },

        setLanguage(state, data) {
            state.ui.language = data === 'en' ? 'en' : 'ru';
        }
    },

    actions: {
        loadDataServer({commit, state}) {
            let url = DATA_SERVER_URL;

            if (state.ui.language === 'ru') {
                url = DATA_SERVER_URL + '_ru';
            }

            fetch(url)
                .then((response) => response.json())
                .then((response) => {

                    if (response.ok) {
                        const result = response.result ? response.result.data : response.data;
                        const data = {cards: []};
                        result.forEach((item) => {
                            switch (item.name) {
                                case 'header' :
                                    data.header = item;
                                    break;
                                case 'mobileAdaptive' :
                                    data.mobileAdaptive = item;
                                    break;
                                case 'applicationsCreators' :
                                    data.applicationsCreators = item;
                                    break;
                                case 'environmentForApplication' :
                                    data.environmentForApplication = item;
                                    break;
                                default:
                                    if (item.name.indexOf('card-') === 0)
                                        data.cards.push(item);
                            }
                        });
                        commit('loadData', data);
                    }
                })
        },
    },

    getters: {
        getLanguage (state) { return state.ui.language },
        getHeader (state) { return state.header },
        getCards (state) { return state.cards },
        getMobileAdaptive (state) { return state.mobileAdaptive },
        getApplicationsCreators (state) { return state.applicationsCreators },
        getEnvironmentForApplication (state) { return state.environmentForApplication },
    }
};

export default PageModule;