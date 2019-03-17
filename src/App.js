import React, { useState, useEffect } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import UseLocation from './UseLocation'

const App = () => {
    const [lat, errorMessage, month] = UseLocation();

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