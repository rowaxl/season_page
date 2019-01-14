import './SeasonDisplay.css'
import React from 'react';

class SeasonDisplay extends React.Component {
    constructor(props) {
        super();
        this.props = props;

    }

    getSeason(lat, month) {
        if (month > 2 && month < 9) {
            return lat > 0 ? 'summer' : 'winter'
        } else {
            return lat > 0 ? 'winter' : 'summer'
        }
    }

    render() {
        const seasonConfig = {
            summer: { text: 'Let\'s hit the beach!', iconName: 'sun' },
            winter: {text: 'Burr, it\'s chilly!', iconName: 'snowflake' }
        }

        const season = this.getSeason(this.props.lat, this.props.month);

        return (
            <div className={`season-display ${season}`}>
                <i className={`${seasonConfig[season].iconName} icon-left icon massive`} />
                <h1>{seasonConfig[season].text}</h1>
                <i className={`${seasonConfig[season].iconName} icon-right icon massive`} />
            </div>
        );
    }
}

export default SeasonDisplay;