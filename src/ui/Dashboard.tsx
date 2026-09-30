import CurrentWeather from "./dashboard_components/CurrentWeather.tsx";
import Forecast from "./dashboard_components/Forecast.tsx";
import Controller from "./dashboard_components/Controller.tsx";
import DataController from "./dashboard_components/DataController.tsx";
import MiniClock from "./dashboard_components/MiniClock.tsx";

import { useState, useEffect } from "react";

import { useSnackbar } from "../hooks/SnackbarContext.tsx";

import { currentTime } from "../utils/helpers.ts";

import { getCoordinates, apiFetch, } from '../utils/data.ts';
import type { ForecastEntry, DashboardProps, WeatherObjectProps, TempObjectProps, WindObjectProps, SunriseAndSunsetObjectProps} from "../utils/types.ts";

export default function Dashboard({darkMode}: DashboardProps) {

    const [time, setTime] = useState("");

    // Current location and name 
    const [currentLocationName, setCurrentLocationName] = useState("Globe, Earth");
    
    // Unit Switcher
    const [units, setUnits] = useState<boolean>(() => {
        const stored = localStorage.getItem("units");
        return stored === "true";
    });

    //Weather component
    const [weather, setWeather] = useState<WeatherObjectProps>({
        id: 0,
        main: "",
        description: "",
        icon: "/assets/icons/wi-cloud.svg"
    });

    const iconUrl = "https://openweathermap.org/payload/api/media/file/";

    //Temperature component
    const [temp, setTemp] = useState<TempObjectProps>({
        temp: 0,
        feels_like: 0,
        temp_max: 0,
        temp_min: 0
    });

    //Humidity component
    const [humidity, setHumidity] = useState(0);

    //Wind component
    const [wind, setWind] = useState<WindObjectProps>({
        speed: 0,
        deg: 0,
        gust: 0,
    });

    // Visiblity component
    const [visiblity, setVisiblity] = useState(0);

    //Sunrise and sunset component
    const [sunTime, setSunTime] = useState<SunriseAndSunsetObjectProps>({
        sunrise: 0,
        sunset: 0,
    })
    
    // Notices
    const { showSnackbar } = useSnackbar();

    // Button states
    const [disabled, setDisabled] = useState(false);

    const [isLoaded, setIsLoaded] = useState(false);
    const [isFailed, setIsFailed] = useState(false);

    // Forecast component
    const [forecastList, setForecastList] = useState<ForecastEntry[]>([]);

    async function handleFetch(lon: number, lat: number, useExactLocation=false) {

        showSnackbar("Acquiring weather info...", 6000)
        setDisabled(true);
        setIsFailed(false);

        if (useExactLocation === true) {
            const exactCoords = await getCoordinates();
            lon = exactCoords.lon;
            lat = exactCoords.lat;
        }

        try {
            const resultWeather = await apiFetch(lon, lat, "weather");
            const resultForecast = await apiFetch(lon, lat, "forecast");

            // Update location name
            const current = resultWeather.sys.country ? resultWeather.name + ", " + resultWeather.sys.country
            : resultWeather.name;
            setCurrentLocationName(current);
        
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

            setVisiblity(resultWeather.visibility);

            // Update Sunrise and Sunset related state
            const {sunrise, sunset} = resultWeather.sys
            setSunTime({
                sunrise,
                sunset
            })

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
            
            setIsLoaded(true);
            showSnackbar("Weather info acquired!");
            setTime(currentTime());
            setDisabled(false);

        } catch (e) {
            console.error(e);
            setIsFailed(true);
            if(!isLoaded) {
                showSnackbar("Weather fetching error!", 6000);
            }
            else {
                showSnackbar("Weather fetching error!\nShowing data for previous location", 6000);
            }
            
    }
  }

    useEffect(() => {
        
        const {lon, lat} = 
        localStorage.getItem("current") != null ? JSON.parse(String(localStorage.getItem("current"))) : {
            lon: 0,
            lat: 0
        }

        const id = setTimeout(() => {
            handleFetch(lon, lat)
        }, 200);
        
        return () => clearTimeout(id);

    }, []);

    return (

        <>
            <Controller currentLocationName={currentLocationName} disabled={disabled} units={units} 
            onSetUnits={setUnits} onHandleFetch={handleFetch} darkMode={darkMode} isLoaded={isLoaded} isFailed={isFailed}/>
            <CurrentWeather weather={weather} temperature={temp} humidity={humidity} 
            wind={wind} visibility={visiblity} sunTime={sunTime} units={units} darkMode={darkMode} isLoaded={isLoaded}/>
            <Forecast forecastList={forecastList} units={units} darkMode={darkMode} isLoaded={isLoaded}/>
            <MiniClock darkMode={darkMode} time={time} />
            <DataController darkMode={darkMode}/>
        </>

    );
}
