import React from 'react';

import '../styles/square.css';

class Square extends React.Component {

    render() {
        return (
            <button
                className="square"
                onClick={this.click}>
                {this.props.value}
            </button>
        );
    }

    click = () => this.props.onClick();
};

export default Square;