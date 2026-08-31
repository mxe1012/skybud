import { 
    InfoPaneContainer, 
    InfoPane, 
    WeatherInfoPaneContainer, 
    ExtraInfoPaneContainer, 
} from './Containers.tsx';
    
import Weather from './dashboard_components/Weather.tsx';
import Temperature from './dashboard_components/Temperature.tsx';
import Humidity from './dashboard_components/Humidity.tsx';
import Wind from './dashboard_components/Wind.tsx';
import Visibility from './dashboard_components/Visiblity.tsx';
import SunriseAndSunset from './dashboard_components/SunriseSunset.tsx';

import type { CurrentWeatherProps } from "../utils/types.tsx";

export default function CurrentWeather({weather, temperature, humidity, wind, visibility, sunrise, sunset, units, darkMode}: CurrentWeatherProps) {

    return (
        <>
            <InfoPaneContainer id={weather.id}>
                <WeatherInfoPaneContainer className={darkMode ? "WeatherInfoPaneContainer dark" : "WeatherInfoPaneContainer light"}>
                    <InfoPane name="Weather" icon="wi-day-cloudy.svg">
                        <Weather weather={weather} />
                    </InfoPane>
                    <InfoPane name="Temperature" icon="wi-thermometer.svg">
                        <Temperature temperature={temperature} units={units}/>
                    </InfoPane>
                </WeatherInfoPaneContainer>
                <ExtraInfoPaneContainer className={darkMode ? "ExtraInfoPaneContainer dark" : "ExtraInfoPaneContainer light"}>
                    <InfoPane name='Humidity' icon="wi-humidity.svg">
                        <Humidity humidity={humidity} />
                    </InfoPane>
                    <InfoPane name='Wind' icon="wi-windy.svg">
                        <Wind wind={wind} units={units}/>
                    </InfoPane>
                    <InfoPane name="Visibility" icon="wi-stars.svg">
                        <Visibility visiblity={visibility} units={units}/>
                    </InfoPane>
                    <InfoPane name="Sunrise/Sunset" icon="wi-horizon.svg">
                        <SunriseAndSunset sunrise={sunrise} sunset= {sunset}/>
                    </InfoPane>
                </ExtraInfoPaneContainer>
            </InfoPaneContainer>
        </>
  );
}
