import React, { useState, useEffect } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
    const [lat, setLat] = useState(null);
    const [month, setMonth] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => setLat(position.coords.latitude),
            err => setErrorMessage(err.message)
        );

        const getMonth = new Date().getMonth();
        setMonth(getMonth);
    }, []); // just One time!

    let content;

    if (errorMessage && !lat) {
        content = <div>Error: {errorMessage}</div>
    } else if (!errorMessage && lat) {
        content = <SeasonDisplay lat={lat} month={month} />
    } else {
        content = <Spinner Message='Please accept to use location information!' />
    }

    return <div className="border red">{ content }</div>
};

export default App;