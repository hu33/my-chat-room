import React from 'react';
import './index.scss';

class SearchInput extends React.PureComponent {
    constructor(props){
        super(props);
    }

    render() {

        return (
            <div className="search-item">
                <input placeholder="search user"/>
            </div>
        )
    }
}

export default SearchInput;