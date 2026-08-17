import { useState } from "react";
import { getCoordinates, apiFetch } from '../utils/functions.tsx';
import { InfoPaneContainer, EventButton, InfoPane, WeatherInfoPaneContainer, ExtraInfoPaneContainer, 
    Weather, Temperature, Humidity, Wind} from './Components.tsx';

export default function Dashboard() {

  // Current name of location
  const [locationName, setLocationName] = useState("");

  //Weather component
  const [weather, setWeather] = useState("");
  const [weatherDesc, setWeatherDesc] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");

  //Temperature component
  const [temp, setTemp] = useState(0);
  const [feelsLike, setFeelsLike] = useState(0);
  const [maxTemp, setMaxTemp] = useState(0);
  const [minTemp, setMinTemp] = useState(0);

  //Humidity component
  const [humidity, setHumidity] = useState(0);

  //Wind component
  const [speed, setSpeed] = useState(0);
  const [degree, setDegree] = useState(0);
  const [gust, setGust] = useState(0);

  const iconUrl = "https://openweathermap.org/payload/api/media/file/";

  async function handleClick() {
    const coords = await getCoordinates();

    try {
      const result = await apiFetch(coords.lon, coords.lat);

      // Update location name
      setLocationName(result.name + ", " + result.sys.country);

      // Update Weather-related state
      setWeather(result.weather[0].main);
      setWeatherDesc(result.weather[0].description);
      setWeatherIcon(iconUrl + result.weather[0].icon + ".png");

      // Update Temperature-related state
      setTemp(result.main.temp);
      setFeelsLike(result.main.feels_like);
      setMaxTemp(result.main.temp_max);
      setMinTemp(result.main.temp_min);

      // Update Humidity-related state
      setHumidity(result.main.humidity);

      //Update Wind-related state
      setSpeed(result.wind.speed);
      setDegree(result.wind.deg);
      if (!result.wind.gust) {
        setGust(0);
      }
      else {
      setGust(result.wind.gust);
      }

      console.log("Weather Data: ");
      console.log(result.weather[0])
      console.log("Temperature Data: ");
      console.log(result.main);
      console.log("Wind Data: ");
      console.log(result.wind);


    } catch (e) {
      console.error(e);
      alert("Something went wrong during the fetching of data.");
    }
  }

  return (
    <>
      <h1 style={{textAlign: 'center'}}>📍 <b>{locationName}</b></h1>
      <InfoPaneContainer>
      <WeatherInfoPaneContainer>
        <InfoPane name="Weather">
          <Weather weather={weather} weatherDesc={weatherDesc} weatherIcon={weatherIcon} />
        </InfoPane>
        <InfoPane name="Temperature">
          <Temperature temp={temp} feelsLike={feelsLike} maxTemp={maxTemp} minTemp={minTemp} />
        </InfoPane>
      </WeatherInfoPaneContainer>
      <ExtraInfoPaneContainer>
        <InfoPane name='Humidity'>
          <Humidity humidity={humidity} />
        </InfoPane>
        <InfoPane name='Wind'>
          <Wind speed={speed} degree={degree} gust={gust}/>
        </InfoPane>
        <InfoPane name="Visibility">
          Visibility
        </InfoPane>
        <InfoPane name="Sunrise and Sunset">
          Sunrise and Sunset
        </InfoPane>
      </ExtraInfoPaneContainer>
      </InfoPaneContainer>
      <br />
      <div style={{textAlign: 'center'}}>
        <EventButton text="Update" onClick={handleClick} />
      </div>
    </>
  );
}

