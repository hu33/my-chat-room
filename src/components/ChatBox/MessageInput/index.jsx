import React from 'react';
import './index.scss';

class MessageInput extends React.PureComponent {
    constructor(props){
        super(props);

        let textArea = null;

        this.onKeyDown = this.onKeyDown.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    onKeyDown(e){
        if(e.keyCode === 13){
            e.preventDefault();
            this.sendMessage(e.target.value);
            this.textArea.value = '';
        }
    }

    sendMessage(message){
        console.log(message);
    }

    render() {
        return (
            <div className="message-input">
                <textarea
                    placeholder="press enter to send"
                    onKeyDown={this.onKeyDown}
                    ref={input => this.textArea = input}
                />
            </div>
        )

    }
}

export default MessageInput;