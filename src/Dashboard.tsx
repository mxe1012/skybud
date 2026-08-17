import { useState } from "react";
import { getLongitude, getLatitude, apiFetch } from './functions.tsx';
import { InfoPaneContainer, EventButton, InfoPane, WeatherInfoPaneContainer, ExtraInfoPaneContainer, 
    Weather, Temperature, Humidity} from './Components.tsx';

export default function Dashboard() {
  const [weather, setWeather] = useState("");
  const [weatherDesc, setWeatherDesc] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");

  const [temp, setTemp] = useState(0);
  const [feelsLike, setFeelsLike] = useState(0);
  const [maxTemp, setMaxTemp] = useState(0);
  const [minTemp, setMinTemp] = useState(0);

  const [humidity, setHumidity] = useState(0);

  const iconUrl = "https://openweathermap.org/payload/api/media/file/";

  async function handleClick() {
    const lon = await getLongitude();
    const lat = await getLatitude();

    try {
      const result = await apiFetch(lon, lat);

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

    } catch (e) {
      console.error(e);
      alert("something went wrong");
    }
  }

  return (
    <>
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
      </ExtraInfoPaneContainer>
      </InfoPaneContainer>
      <br />
      <div style={{textAlign: 'center'}}>
      <EventButton text="Update" onClick={handleClick} />
      </div>
    </>
  );
}

