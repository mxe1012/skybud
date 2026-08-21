import {EventButton, ForecastInfoContainer, ForecastInfoPane, ForecastItem} from './Components.tsx';
import { getCoordinates, apiFetch } from '../utils/data.tsx';
import  type{ ForecastEntry } from '../utils/types.tsx';
import { useState } from 'react';

export default function Forecast() {

    const [forecastList, setForecastList] = useState<ForecastEntry[]>([]);

    const iconUrl = "https://openweathermap.org/payload/api/media/file/";

    async function handleFetch() {

        const coords = await getCoordinates();

        try {
            const result = await apiFetch(coords.lon, coords.lat, "forecast");

            const newForecastList: ForecastEntry[] = result.list.map((element) => {

            const dt = element.dt;

            const { main, icon } = element.weather[0];
            const { temp_max, temp_min } = element.main;

            return {
                dt,
                main,
                icon: iconUrl + icon + ".png",
                temp_max,
                temp_min,
            };
        });

        setForecastList(newForecastList);

        } catch (e) {
            console.log(e);
            alert("Something went wrong in fetching the forecast");
        }
    }

    console.log(forecastList);

    return (
        <>
            <ForecastInfoContainer>
                {forecastList.map((forecast) => (
                <li key={forecast.dt}>
                    <ForecastInfoPane>
                        <ForecastItem
                            dt={forecast.dt}
                            weather={{ main: forecast.main, icon: forecast.icon }}
                            temperature={{ temp_max: forecast.temp_max, temp_min: forecast.temp_min }}
                    />
                    </ForecastInfoPane>
                </li>
                )
            )}
            </ForecastInfoContainer>
            <br />
            <EventButton text="Get Forecast" onClick={handleFetch}/>
        </>
    );

}
