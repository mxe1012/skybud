import type { SunriseAndSunsetProps } from "../../../utils/types";

import { InfoPaneIcon } from "../../Containers";

export default function SunriseAndSunset({sunTime, darkMode}: SunriseAndSunsetProps) {

    const sunriseFormatted = new Date(sunTime.sunrise * 1000);
    const sunsetFormatted = new Date(sunTime.sunset * 1000);

    return (
        <div>
            <InfoPaneIcon src="wi-sunrise.svg" darkMode={darkMode}/>Sunrise 
            <br />
            <b>{sunriseFormatted.toLocaleTimeString()}</b>
            <br />
            <InfoPaneIcon src="wi-sunset.svg" darkMode={darkMode}/>Sunset
            <br />
            <b>{sunsetFormatted.toLocaleTimeString()}</b>
        </div>
    );
}