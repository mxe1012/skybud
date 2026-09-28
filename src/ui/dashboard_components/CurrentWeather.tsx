import { 
    InfoPaneContainer, 
    InfoPane, 
    WeatherInfoPaneContainer, 
    ExtraInfoPaneContainer, 
} from '../Containers.tsx';
    
import Weather from './current_weather_components/Weather.tsx';
import Temperature from './current_weather_components/Temperature.tsx';
import Humidity from './current_weather_components/Humidity.tsx';
import Wind from './current_weather_components/Wind.tsx';
import Visibility from './current_weather_components/Visiblity.tsx';
import SunriseAndSunset from './current_weather_components/SunriseSunset.tsx';

import type { CurrentWeatherProps } from "../../utils/types.ts";

export default function CurrentWeather({weather, temperature, humidity, wind, visibility, sunTime, units, darkMode, isLoaded}: CurrentWeatherProps) {

    return (
        <>
            <InfoPaneContainer className={darkMode ? "InfoPaneContainer dark" : "InfoPaneContainer light"} 
                id={weather.id} darkModeBG={darkMode}>
                <WeatherInfoPaneContainer className={darkMode ? "WeatherInfoPaneContainer dark" : "WeatherInfoPaneContainer light"}>
                    <InfoPane name="Weather" icon="wi-day-cloudy.svg" darkModeIcon={darkMode}>
                        <Weather weather={weather} darkMode={darkMode} isLoaded={isLoaded}/>
                    </InfoPane>
                    <InfoPane name="Temperature" icon="wi-thermometer.svg" darkModeIcon={darkMode}>
                        <Temperature temperature={temperature} units={units} darkMode={darkMode} isLoaded={isLoaded}/>
                    </InfoPane>
                </WeatherInfoPaneContainer>
                <ExtraInfoPaneContainer className={darkMode ? "ExtraInfoPaneContainer dark" : "ExtraInfoPaneContainer light"}>
                    <InfoPane name='Humidity' icon="wi-humidity.svg" darkModeIcon={darkMode}>
                        <Humidity humidity={humidity} darkMode={darkMode}/>
                    </InfoPane>
                    <InfoPane name='Wind' icon="wi-windy.svg" darkModeIcon={darkMode}>
                        <Wind wind={wind} units={units} darkMode={darkMode} isLoaded={isLoaded}/>
                    </InfoPane>
                    <InfoPane name="Visibility" icon="wi-stars.svg" darkModeIcon={darkMode}>
                        <Visibility visiblity={visibility} units={units} darkMode={darkMode}/>
                    </InfoPane>
                    <InfoPane name="Sunrise/Sunset" icon="wi-horizon.svg" darkModeIcon={darkMode}>
                        <SunriseAndSunset sunTime={sunTime} darkMode={darkMode} isLoaded={isLoaded}/>
                    </InfoPane>
                </ExtraInfoPaneContainer>
            </InfoPaneContainer>
        </>
  );
}
