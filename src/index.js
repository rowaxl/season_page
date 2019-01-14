import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = { lat: null, month: null, errorMessage:'' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({errorMessage: err.message})
        )

        this.setState({ month: new Date().getMonth })
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} month={this.state.month} />
        }

        return <Spinner Message='Please accept to use location information!' />
    }

    render() {
        return (
            <div className="border red">
                { this.renderContent() }
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
