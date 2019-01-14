import React from 'react';

class Spinner extends React.Component {
    constructor(props) {
        super(props);
        this.Message = null;
    }

    render() {
        return (
            <div className="ui active dimmer">
                <div className="ui text loader">{this.props.Message}</div>
            </div>
        )
    }
}

Spinner.defaultProps = {
    Message: 'Loading...'
};

export default Spinner;
