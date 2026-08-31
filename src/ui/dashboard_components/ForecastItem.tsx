import type { ForecastInfoProps } from "../../utils/types";

import { fahrenheitToCelsius } from "../../utils/helpers";

export default function ForecastItem({dt, weather, temperature, units}: ForecastInfoProps) {

    const formattedDt = new Date(dt * 1000);

    const strTempMax = units ? "High:" + Math.round(temperature.temp_max) + "°F" :
    "High:" + fahrenheitToCelsius(temperature.temp_max) + "°C";

    const strTempMin = units ? "Low:" + Math.round(temperature.temp_min) + "°F" :
    "High:" + fahrenheitToCelsius(temperature.temp_min) + "°C";
    
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
        <>
            <div>
                {formattedDt.toLocaleDateString()} ({days[formattedDt.getDay()]})
                <br />
                {formattedDt.toLocaleTimeString()}
            </div>
            <div>
                <h2>{weather.main}</h2>
                <img src={weather.icon} width={50} height={50}/>
            </div>
            <br />
            <div id="MiniTempRow">
                <div style={{padding: '10px'}}>
                    <h3>{strTempMax}</h3>
                </div>
                <div style={{padding: '10px'}}>
                    <h3>{strTempMin}</h3>
                </div>
            </div>
        </>
    );
}