import CurrentWeather from "./CurrentWeather.tsx";
import Forecast from "./Forecast.tsx";

import { useState, useEffect } from "react";

import { getCoordinates, apiFetch } from '../utils/data.tsx';
import type { ForecastEntry } from "../utils/types.tsx";

import { ControllerPaneContainer, EventButton, EventInput} from './Components.tsx';

export default function Dashboard() {

    // Current name of location
    const [currentLocationName, setCurrentLocationName] = useState("");

    const [locationName, setLocationName] = useState("");

    // Unit Switcher
    const [units, setUnits] = useState(true);

    //Weather component
    const [weather, setWeather] = useState({
        id: 0,
        main: "",
        description: "",
        icon: "./src/assets/icons/wi-cloud.svg"
    });

    const iconUrl = "https://openweathermap.org/payload/api/media/file/";

    //Temperature component
    const [temp, setTemp] = useState({
        temp: 0,
        feels_like: 0,
        temp_max: 0,
        temp_min: 0
    });

    //Humidity component
    const [humidity, setHumidity] = useState(0);

    //Wind component
    const [wind, setWind] = useState({
        speed: 0,
        deg: 0,
        gust: 0,
    });

    //Sunrise and sunset component
    const [sunrise, setSunrise] = useState(0);
    const [sunset, setSunset] = useState(0);
  
    const [notice, setNotice] = useState("");
    const [showSnackbar, setShowSnackbar] = useState(false);

    const [disabled, setDisabled] = useState(false);

    const [forecastList, setForecastList] = useState<ForecastEntry[]>([]);

    async function handleFetch() {

        setNotice("Acquiring weather info...");
        setDisabled(true);

        setShowSnackbar(true);

        const coords = await getCoordinates();
        const selectedUnits = units ? 'imperial' : 'metric';

    try {
        const resultWeather = await apiFetch(coords.lon, coords.lat, "weather", selectedUnits);
        const resultForecast = await apiFetch(coords.lon, coords.lat, "forecast", selectedUnits);

        // Update location name
        setCurrentLocationName(resultWeather.name + ", " + resultWeather.sys.country);
      
        // Update Weather-related state
        const {id, main, description} = resultWeather.weather[0];
        setWeather({
            id,
            main,
            description,
            icon: iconUrl + resultWeather.weather[0].icon + ".png"
        });

        // Update Temperature-related state
        const {temp, feels_like, temp_max, temp_min} = resultWeather.main;
        setTemp({
            temp, 
            feels_like, 
            temp_max, 
            temp_min
        });

        // Update Humidity-related state
        setHumidity(resultWeather.main.humidity);

        //Update Wind-related state
        const {speed, deg, gust} = resultWeather.wind;
        setWind({
            speed, 
            deg, 
            gust
        });

        // Update Sunrise and Sunset related state
        setSunrise(resultWeather.sys.sunrise);
        setSunset(resultWeather.sys.sunset);

        const newForecastList: ForecastEntry[] = resultForecast.list.map((element) => {

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

        setNotice("Weather info acquired!");
        setTimeout(() => setShowSnackbar(false), 6000);

        setDisabled(false);

    } catch (e) {
        console.error(e);
        setNotice("Something went wrong during the fetching of data.");
    }
  }

    async function handleSearch(e) {
        setLocationName(e.target.value);
    }

    useEffect(() => {

        setTimeout(handleFetch, 2000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (

        <>
            <ControllerPaneContainer>
                <div style={{textAlign: 'center'}}>
                    Units: 
                    {" "}
                    <select id="unit" value={units} onChange={() => {setUnits(!units)}} disabled={disabled}>
                        <option value={true} onClick={handleFetch}>Imperial</option>
                        <option value={false} onClick={handleFetch}>Metric</option>
                    </select>
                    {" "}
                    <EventInput placeholder="Location" value={locationName} onChange={handleSearch}/>
                    {" "}
                    <EventButton text="Update Weather Information" disabled={disabled} onClick={handleFetch} />
                </div>
            </ControllerPaneContainer>
            <div id="snackbar" className={showSnackbar ? "show" : ""}>{notice}</div>
            <h1 style={{textAlign: 'center'}}>📍 <b>{currentLocationName}</b></h1>
            <CurrentWeather weather={weather} temperature={temp} humidity={humidity} 
            wind={wind} sunrise={sunrise} sunset={sunset} units={units}/>
            <Forecast forecastList={forecastList} units={units}/>
        </>

    );
}
