import React from 'react';
import MessageItem from './MessageItem/index.jsx';
import './index.scss';

class MessageBox extends React.PureComponent {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="message-box">
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
            </div>
        )
    }
}

export default MessageBox;