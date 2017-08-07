import React from 'react';
import './index.scss';

class MessageItem extends React.PureComponent {
    constructor(props){
        super(props);
    }

    render() {
        const { msg, index } = this.props;
        return (
            <div className="message-item">
                <div className="avatar">
                    <img src="/static/avatar.jpg" onClick={this.props.clickAvatar.bind(null, index)}/>
                </div>
                <div className="message">
                    <span>{msg.msg + index}</span>
                </div>
            </div>
        )
    }
}

export default MessageItem;