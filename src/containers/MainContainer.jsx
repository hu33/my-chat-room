import React from 'react';
import { connect } from 'react-redux';
import { message_update, contact_update, nickname_get } from '../action/index.jsx';

import ChatPage from '../components/page/ChatPage/index.jsx';

const mapStateToProps = (state, props) => {
    return {
        nickName: state.nickName,
        msgList: state.msgList,
        contactList: state.contactList
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleSend: function (msg, nickName) {
            dispatch(message_update({
                nickName: nickName,
                msg: msg
            }));
        }
    }
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(ChatPage);

export default MainContainer;

