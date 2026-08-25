import type { SunriseAndSunsetProps } from "../utils/types";

import { InfoPaneIcon } from "./Containers";

export default function SunriseAndSunset({sunrise, sunset}: SunriseAndSunsetProps) {

    const sunriseFormatted = new Date(sunrise * 1000);
    const sunsetFormatted = new Date(sunset * 1000);

    return (
        <div>
            <InfoPaneIcon src="wi-sunrise.svg" />Sunrise 
            <br />
            <b>{sunriseFormatted.toLocaleTimeString()}</b>
            <br />
            <InfoPaneIcon src="wi-sunset.svg" />Sunset
            <br />
            <b>{sunsetFormatted.toLocaleTimeString()}</b>
        </div>
    );
}