import React from 'react'
import ContactList from './ContactList/index.jsx';
import InfoItem from './InfoItem/index.jsx';
import SearchInput from './SearchInput/index.jsx';
import './index.scss';

class Contact extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="contact-wrapper">
                <InfoItem />
                <SearchInput />
                <ContactList />
            </div>
        )
    }
}

export default Contact;