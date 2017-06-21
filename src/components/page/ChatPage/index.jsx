import React from 'react';
import Header from '../../../components/Header/index.jsx';
import Contact from '../../../components/page/ChatPage/Contact/index.jsx';
import ChatBox from '../../../components/page/ChatPage/ChatBox/index.jsx';
import Footer from '../../../components/Footer/index.jsx';
import './index.scss';

class ChatPage extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const { nickName, contactList, msgList, handleSend } = this.props;
        return (
            <div className="page-container">
                <Header />
                <div className="main-page">
                    <Contact contactList={contactList} nickName={nickName} />
                    <ChatBox msgList={msgList} nickName={nickName} handleSend={handleSend} />
                </div>
                <Footer/>
            </div>
        )
    }
}

export default ChatPage;