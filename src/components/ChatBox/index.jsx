import React from 'react';
import MessageBox from './MessageBox/index.jsx';
import MessageInput from './MessageInput/index.jsx';
import './index.scss';

class ChatBox extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="chatBox">
                <MessageBox />
                <MessageInput />
            </div>
        )
    }
}

export default ChatBox;