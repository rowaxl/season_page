import React, { useState, useEffect } from 'react';

export default () => {
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

    return [lat, errorMessage, month];
}