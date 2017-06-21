import React from 'react';
import './index.scss';

class MessageInput extends React.PureComponent {
    constructor(props){
        super(props);


        let textArea = null;

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    onKeyDown(e){
        if(e.keyCode === 13){
            if(!e.ctrlKey){
                e.preventDefault();
                this.sendMessage(e.target.value);
                this.textArea.value = '';
                this.textArea.focus();
            }
        }
    }

    onKeyUp(e){
        if (e.keyCode === 13 && !e.ctrlKey){
            e.preventDefault();
        }
    }

    onKeyPress(e){
        if (e.keyCode === 13 && !e.ctrlKey) {
            e.preventDefault();
        }
    }

    sendMessage(message){
        console.log(message);
        if( message ) {
            const regLeft = /</g;
            const regRight = />/g;
            message = message.replace(regLeft, '&lt;');
            message = message.replace(regRight, '&gt;');
            message = message.replace(/n/g, '<br/>');

            const nickName = this.props.nickName;
            this.props.handleSend(message, nickName);
        }
    }

    render() {
        return (
            <div className="message-input">
                <textarea
                    placeholder="press enter to send"
                    onKeyDown={this.onKeyDown}
                    onKeyUp={this.onKeyUp}
                    onKeyPress={this.onKeyPress}
                    ref={input => this.textArea = input}
                />
            </div>
        )

    }
}

export default MessageInput;