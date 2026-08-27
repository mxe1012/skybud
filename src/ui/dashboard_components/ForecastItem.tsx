import type { ForecastInfoProps } from "../../utils/types";

export default function ForecastItem({dt, weather, temperature, units}: ForecastInfoProps) {

    const formattedDt = new Date(dt * 1000);

    const strTempMax = units ? "High:" + Math.round(temperature.temp_max) + "°F" :
    "High:" + Math.round(temperature.temp_max) + "°C";

    const strTempMin = units ? "Low:" + Math.round(temperature.temp_min) + "°F" :
    "High:" + Math.round(temperature.temp_min) + "°C";
    
    return (
        <>
            <div>
                {formattedDt.toLocaleDateString()}
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