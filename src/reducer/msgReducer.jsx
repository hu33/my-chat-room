function msgReducer(state=[], action) {
    switch (action.type){
        case 'MSG_UPDATE':
            let newState = [];
            newState = [...state, action.msg];
            return newState;
        default:
            return state;
    }
}

export default msgReducer;