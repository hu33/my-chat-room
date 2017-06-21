function contactReducer(state= [], action) {
    switch (action.type) {
        case 'CONTACT_UPDATE':
            return action.contactList;
        default:
            return state;
    }
}

export default contactReducer;