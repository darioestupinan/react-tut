import React from 'react';

import '../styles/square.css';

class Square extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: null,
        };
    }


    render() {
        return (
            <button className="square" onClick={this.sendAlert}>
                {this.state.value}
            </button>
        );
    }

    sendAlert = () => this.setState({value: 'X'});
};

export default Square;