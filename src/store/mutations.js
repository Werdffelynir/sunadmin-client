export const mutationAddItem = (state, data) => {
    state.item.push(data)
};

export const mutationUpdateItem = (state, data) => {
    let tIndex = state.item.findIndex((element) => {
        return element.id === data.id
    });
    state.item[tIndex] = data
};

export const mutationStatusItem = (state, index, status) => {
    state.item[index].active = !!status
};


export const mutationCount = (state) => {
    state.count ++;
};