import { useState, useEffect } from "react";
import { getCoordinates, apiFetchWeather } from '../utils/data.tsx';
import { ControllerPaneContainer, InfoPaneContainer, EventButton, InfoPane, WeatherInfoPaneContainer, ExtraInfoPaneContainer, 
    Weather, Temperature, Humidity, Wind, SunriseAndSunset} from './Components.tsx';

export default function Dashboard() {

  // Current name of location
  const [locationName, setLocationName] = useState("");

  // Unit Switcher
  const [units, setUnits] = useState(true);

  //Weather component
  const [weather, setWeather] = useState({
    main: "",
    description: "",
    icon: ""
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
  const [disabled, setDisabled] = useState(false);

  async function handleFetch() {

    setNotice("Acquiring weather info...");
    setDisabled(true);

    const coords = await getCoordinates();
    const selectedUnits = units ? 'imperial' : 'metric';

    try {
      const result = await apiFetchWeather(coords.lon, coords.lat, selectedUnits);

      // Update location name
      setLocationName(result.name + ", " + result.sys.country);
      
      // Update Weather-related state
      const {main, description} = result.weather[0];
      setWeather({
        main,
        description,
        icon: iconUrl + result.weather[0].icon + ".png"
      });

      // Update Temperature-related state
      const {temp, feels_like, temp_max, temp_min} = result.main;
      setTemp({
        temp, feels_like, temp_max, temp_min
      });

      // Update Humidity-related state
      setHumidity(result.main.humidity);

      //Update Wind-related state
      const {speed, deg, gust} = result.wind;
      setWind({
        speed, deg, gust
      });

      // Update Sunrise and Sunset related state
      setSunrise(result.sys.sunrise);
      setSunset(result.sys.sunset);

      setNotice("");
      setDisabled(false);

    } catch (e) {
      console.error(e);
      alert("Something went wrong during the fetching of data.");
    }
  }

    useEffect(() => {

      setTimeout(handleFetch, 2000); //2000

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <>
      <h1 style={{textAlign: 'center'}}>📍 <b>{locationName}</b></h1>
      <h3 style={{textAlign: 'center'}}>{notice}</h3>
      <InfoPaneContainer>
      <WeatherInfoPaneContainer>
        <InfoPane name="Weather" icon="wi-day-cloudy.svg">
          <Weather weather={weather} />
        </InfoPane>
        <InfoPane name="Temperature" icon="wi-thermometer.svg">
          <Temperature temperature={temp} units={units}/>
        </InfoPane>
      </WeatherInfoPaneContainer>
      <ExtraInfoPaneContainer>
        <InfoPane name='Humidity' icon="wi-humidity.svg">
          <Humidity humidity={humidity} />
        </InfoPane>
        <InfoPane name='Wind' icon="wi-windy.svg">
          <Wind wind={wind} units={units}/>
        </InfoPane>
        <InfoPane name="Visibility" icon="wi-stars.svg">
          Visibility
        </InfoPane>
        <InfoPane name="" icon="wi-horizon.svg">
          <SunriseAndSunset sunrise={sunrise} sunset= {sunset}/>
        </InfoPane>
      </ExtraInfoPaneContainer>
      </InfoPaneContainer>
      <br />
      <ControllerPaneContainer>
        <div style={{textAlign: 'center'}}>
          Units: 
          {" "}
          <select id="unit" value={units} onChange={() => {setUnits(!units)}} disabled={disabled}>
            <option value={true} onClick={handleFetch}>Imperial</option>
            <option value={false} onClick={handleFetch}>Metric</option>
          </select>
          {" "}
          <EventButton text="Update Weather Information" disabled={disabled} onClick={handleFetch} />
        </div>
      </ControllerPaneContainer>
    </>
  );
}

