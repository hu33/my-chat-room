import React from 'react';
import './index.scss';

class Header extends React.PureComponent {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="header-wrapper">
                <span>Welcome to 33's Chat-Room!</span>
                <span className="btn-logout">logout</span>
            </div>
        )
    }
}

export default Header;
