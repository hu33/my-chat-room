import React from 'react';
import './index.scss';

class MessageItem extends React.PureComponent {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="message-item">
                <div className="avatar">
                    <img src="/static/avatar.jpg"/>
                </div>
                <div className="message">
                    <span>hello</span>
                </div>
            </div>
        )
    }
}

export default MessageItem;