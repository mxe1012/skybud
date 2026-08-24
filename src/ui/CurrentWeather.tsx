import { InfoPaneContainer, 
    InfoPane, 
    WeatherInfoPaneContainer, 
    ExtraInfoPaneContainer, 
    Weather, 
    Temperature, 
    Humidity, 
    Wind, 
    SunriseAndSunset 
} from './Components.tsx';
    
import type { CurrentWeatherProps } from "../utils/types.tsx";

export default function CurrentWeather({weather, temperature, humidity, wind, sunrise, sunset, units}: CurrentWeatherProps) {

    return (
        <>
            <InfoPaneContainer id={weather.id}>
                <WeatherInfoPaneContainer>
                    <InfoPane name="Weather" icon="wi-day-cloudy.svg">
                        <Weather weather={weather} />
                    </InfoPane>
                    <InfoPane name="Temperature" icon="wi-thermometer.svg">
                        <Temperature temperature={temperature} units={units}/>
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
        </>
  );
}
