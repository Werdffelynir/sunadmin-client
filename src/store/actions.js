
export const addItem = function ({ commit }, item) {
    commit('mutationAddItem', item)
};

export const updateItem = function ({ commit }, item) {
    commit('mutationUpdateItem', item)
};

export const disableItem = ({ commit }, index) => {
    commit('mutationStatusItem', index, false)
};

export const enableItem = ({ commit }, index) => {
    commit('mutationStatusItem', index, true)
};

export const increment = ({ commit }) => {
    commit('mutationCount')
};
