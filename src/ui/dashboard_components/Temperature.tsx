import type { TemperatureProps } from "../../utils/types";

import { fahrenheitToCelsius } from "../../utils/helpers";

export default function Temperature({temperature, units}: TemperatureProps) {

    const {temp, feels_like, temp_max, temp_min} = temperature

    return (
        <div>
            <div className="TemperatureGrid">
                <div style={{padding: '10px'}}>
                    Current {" "}
                    <h1><b>{units ? Math.round(temp) + "°F" : fahrenheitToCelsius(temp) + "°C"}</b></h1>
                </div>
                <div style={{padding: '10px'}}>
                    Feels like {" "}
                    <h1><b>{units ? Math.round(feels_like) + "°F" : fahrenheitToCelsius(feels_like) + "°C"}</b></h1>
                </div>
                <div style={{padding: '10px'}}>
                    High {" "}
                    <h2>{units ? Math.round(temp_max) + "°F" : fahrenheitToCelsius(temp_max) + "°C"}</h2>
                </div>
                <div style={{padding: '10px'}}>
                    Low {" "}
                    <h2>{units ? Math.round(temp_min) + "°F" : fahrenheitToCelsius(temp_min) + "°C"}</h2>
                </div>
            </div>
            <br/>
            </div>
    );
}