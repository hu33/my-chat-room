import React from 'react';
import './index.scss';

class InfoItem extends React.PureComponent {
    constructor(props){
        super(props);
    }

    render() {
        const { nickName } = this.props;
        return (
            <div className="info-item">
                <img src="/static/avatar.jpg"/>
                <span>{nickName}</span>
            </div>
        )
    }
}

export default InfoItem;