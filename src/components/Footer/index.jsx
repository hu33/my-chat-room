import React from 'react';
import './index.scss';

class Footer extends React.PureComponent {
    constructor(props){
        super(props);
    }

    render() {
        return (
        <div className="footer-wrapper">
            <span>33出品</span>
        </div>
        )
    }
}

export default Footer;