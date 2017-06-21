import React from 'react';
import Header from '../components/Header/index.jsx';
import Contact from '../components/Contact/index.jsx';
import ChatBox from '../components/ChatBox/index.jsx';
import Footer from '../components/Footer/index.jsx';
import './index.scss';

class Root extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="page-container">
                <Header />
                <div className="main-page">
                    <Contact />
                    <ChatBox />
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Root;