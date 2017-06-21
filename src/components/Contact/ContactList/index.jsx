import React from 'react';
import { Menu } from 'antd';
import './index.scss';

class ContactList extends React.PureComponent {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="contact-list">
                <Menu
                    theme="dark"
                    defaultSelectedKeys={['1']}
                    mode="inline"
                >
                    <Menu.Item key="1">Bob</Menu.Item>
                    <Menu.Item key="2">Bob</Menu.Item>
                    <Menu.Item key="3">Bob</Menu.Item>
                    <Menu.Item key="4">Bob</Menu.Item>
                    <Menu.Item key="5">Bob</Menu.Item>
                    <Menu.Item key="7">Bob</Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default ContactList;