function nicknameReducer(state='33', action) {
    switch (action.type) {
        case 'NICKNAME_GET':
            return action.nickName;
        default:
            return state;
    }
}

export default nicknameReducer;