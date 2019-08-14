export const getItems = state => state.item;

export const getItem =  state => id => {
    return state.item.find(item => item.id === id);
};


export const count = state => state.count;

