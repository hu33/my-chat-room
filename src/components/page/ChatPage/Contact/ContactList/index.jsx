import React from 'react';
import { Menu } from 'antd';
import './index.scss';

class ContactList extends React.PureComponent {
    constructor(props){
        super(props);
    }

    render() {
        const { contactList } = this.props;
        return (
            <div className="contact-list">
                <Menu
                    theme="dark"
                    mode="inline"
                >
                    { contactList && contactList.map((item,index)=>(
                        <Menu.Item key={index}>{item}</Menu.Item>
                    ))}
                </Menu>
            </div>
        )
    }
}

export default ContactList;