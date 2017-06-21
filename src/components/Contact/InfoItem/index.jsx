import React from 'react';
import './index.scss';

class InfoItem extends React.PureComponent {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="info-item">
                <img src="/static/avatar.jpg"/>
                <span>33</span>
            </div>
        )
    }
}

export default InfoItem;