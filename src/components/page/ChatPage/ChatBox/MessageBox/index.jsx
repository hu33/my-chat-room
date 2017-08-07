import React from 'react';
import MessageItem from './MessageItem/index.jsx';
import './index.scss';

class MessageBox extends React.PureComponent {
    constructor(props){
        super(props);

        this.state = {
            msgList: [],
        };

        this.className = 'message-box';

        this.getData = ::this.getData;
        this.handleClick = ::this.handleClick;
        this.handleScroll = ::this.handleScroll;
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        const self = this;
        fetch('/static/msg.json').then(function (json){
            json.json().then(function (data) {
                const msgList = self.state.msgList.concat(data);
                self.setState({
                    msgList: msgList
                })
            });
        }, function (err) {
            console.log(err);
        });
    }

    handleScroll() {
        this.className = "message-box pointer-not-allow";
        console.log("scroll");
    }

    handleClick(index){
        console.log(index);
    }

    render() {
        const { msgList } = this.state;
        return (
            <div className={this.className} >
                { msgList && msgList.map((item,index) => (
                    <MessageItem key={index} msg={item} index={index} clickAvatar={this.handleClick} />
                ))}
                <div className="load-more" onClick={this.getData} >点击加载更多...</div>
            </div>
        )
    }
}

export default MessageBox;