import type { ForecastItemProps } from "../../utils/types";

import { fahrenheitToCelsius } from "../../utils/helpers";

export default function ForecastItem({forecast, units}: ForecastItemProps) {

    const formattedDt = new Date(forecast.dt * 1000);

    const strTempMax = units ? "High:" + Math.round(forecast.temp_max) + "°F" :
    "High:" + fahrenheitToCelsius(forecast.temp_max) + "°C";

    const strTempMin = units ? "Low:" + Math.round(forecast.temp_min) + "°F" :
    "High:" + fahrenheitToCelsius(forecast.temp_min) + "°C";
    
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
        <>
            <div>
                {formattedDt.toLocaleDateString()} ({days[formattedDt.getDay()]})
                <br />
                {formattedDt.toLocaleTimeString()}
            </div>
            <div>
                <h2>{forecast.main}</h2>
                <img src={forecast.icon} width={50} height={50}/>
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