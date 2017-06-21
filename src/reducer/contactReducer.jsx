const contactList = ['Bob'];

function contactReducer(preState = contactList, action) {
    switch (action.type) {
        case 'CONTACT_UPDATE':
            return action.contactList;
        default:
            return preState;
    }
}

export default contactReducer;