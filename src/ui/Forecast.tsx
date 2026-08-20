import {EventButton, ForecastInfoContainer, ForecastInfoPane, ForecastItem} from './Components.tsx';
import { getCoordinates, apiFetchForecast } from '../utils/data.tsx';
import  type{ ForecastEntry } from '../utils/types.tsx';
import { useState } from 'react';

export default function Forecast() {

    const [notice, setNotice] = useState("");

    const [forecastList, setForecastList] = useState<ForecastEntry[]>([]);

    const iconUrl = "https://openweathermap.org/payload/api/media/file/";

    async function handleFetch() {
        setNotice("Getting forecast data...");

        const coords = await getCoordinates();

        try {
            const result = await apiFetchForecast(coords.lon, coords.lat);

            const newForecastList: ForecastEntry[] = result.list.map((element) => {

            const {dt} = element.dt;

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
        setNotice("Done");

        } catch (e) {
            console.log(e);
            alert("Something went wrong in fetching the forecast");
        }
    }

    return (
        <>
            <h3>{notice}</h3>
            <ForecastInfoContainer>
                {forecastList.map((forecast) => (
                <li key={forecast.dt}>
                    <ForecastInfoPane>
                        <ForecastItem
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
