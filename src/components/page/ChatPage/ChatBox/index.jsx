import React from 'react';
import MessageBox from './MessageBox/index.jsx';
import MessageInput from './MessageInput/index.jsx';
import './index.scss';

class ChatBox extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const { msgList, nickName, handleSend } = this.props;

        return (
            <div className="chatBox">
                <MessageBox msgList={msgList} />
                <MessageInput handleSend={handleSend} nickName={nickName} />
            </div>
        )
    }
}

export default ChatBox;