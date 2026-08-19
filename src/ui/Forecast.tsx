import {ForecastInfoContainer, Weather} from './Components.tsx';
import { getCoordinates, apiFetchForecast } from '../utils/data.tsx';
import { use, useState } from 'react';

export default function Forecast() {

    const [list, setList] = useState([]);

    const [weather, setWeather] = useState({
        main: "",
        description: "",
        icon: ""
    })

    const [units, setUnits] = useState(true);

    async function handleFetch() {

        const coords = await getCoordinates();
         const selectedUnits = units ? 'imperial' : 'metric';

        try {
            const result = await apiFetchForecast(coords.lon, coords.lat, selectedUnits);
        } catch(e) {
            console.log(e);
            alert("Something went wrong in fetching the forecast");
        }


    }

    return (
        <>
            <ForecastInfoContainer>
                aaa
            </ForecastInfoContainer>
        </>
    );

}