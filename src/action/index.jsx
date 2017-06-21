function message_update(msg) {
    return {
        type: 'MSG_UPDATE',
        msg
    }
}

function contact_update(contactList) {
    return {
        type: 'CONTACT_UPDATE',
        contactList
    }
}

function nickname_get(nickName) {
    return {
        type: 'NICKNAME_GET',
        nickName
    }
}

export { message_update, contact_update, nickname_get };