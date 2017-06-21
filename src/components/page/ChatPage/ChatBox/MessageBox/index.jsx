import React from 'react';
import MessageItem from './MessageItem/index.jsx';
import './index.scss';

class MessageBox extends React.PureComponent {
    constructor(props){
        super(props);
    }

    render() {
        const { msgList } = this.props;
        return (
            <div className="message-box">
                { msgList && msgList.map((item,index) => (
                    <MessageItem key={index} msg={item} />
                ))}
            </div>
        )
    }
}

export default MessageBox;