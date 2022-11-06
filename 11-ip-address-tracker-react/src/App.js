import { useState, useEffect } from 'react';
import Header from './components/Header';
import Map from './components/Map';

const API_KEY = 'at_GYS57pFQ0lvCDIIi7FRF4HVEoXaFo';
const API_ENDPOINT = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`;

const App = () => {
    const [details, setDetails] = useState({
        position: [0, 0],
        ipAddress: 'N/A',
        location: 'N/A',
        timezone: 'N/A',
        isp: 'N/A',
    });

    useEffect(() => {
        const getClientDetails = async () => {
            const clientDetails = await fetchClientDetails();

            if (!('code' in clientDetails)) {
                setDetails({
                    position: [clientDetails.location.lat, clientDetails.location.lng],
                    ipAddress: clientDetails.ip,
                    location: `${clientDetails.location.city}, ${clientDetails.location.region} ${clientDetails.location.country} ${clientDetails.location.postalCode}`,
                    timezone: clientDetails.location.timezone,
                    isp: clientDetails.isp,
                });
            }
        }

        getClientDetails();
    }, []);

    const fetchClientDetails = async () => {
        const res = await fetch(API_ENDPOINT);
        return await res.json();
    }

    const searchIp = async (key, search) => {
        const result = await fetchSeachResults(key, search);

        if ('code' in result) {
            alert(`ERRIR ${result.code}: ${result.messages}`);
        } else {
            setDetails({
                position: [result.location.lat, result.location.lng],
                ipAddress: result.ip,
                location: `${result.location.city}, ${result.location.region} ${result.location.country} ${result.location.postalCode}`,
                timezone: result.location.timezone,
                isp: result.isp,
            });
        }
    }

    const fetchSeachResults = async (key, search) => {
        const res = await fetch(`${API_ENDPOINT}&${key}=${search}`);
        return await res.json();
    }

    return (
        <div className="App">
            <Header details={details} onSearch={searchIp} />
            <Map position={details.position} />
        </div>
    )
}

export default App;
