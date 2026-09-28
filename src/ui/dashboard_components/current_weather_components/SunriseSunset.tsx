import type { SunriseAndSunsetProps } from "../../../utils/types";

import { InfoPaneIcon } from "../../Containers";
import SkeletonSunriseAndSunset from "../../skeletons/SkeletonSunriseAndSunset";

export default function SunriseAndSunset({sunTime, darkMode, isLoaded}: SunriseAndSunsetProps) {

    const sunriseFormatted = new Date(sunTime.sunrise * 1000);
    const sunsetFormatted = new Date(sunTime.sunset * 1000);

    return (
        <div>
            <SkeletonSunriseAndSunset isLoaded={isLoaded} darkMode={darkMode}>
                <InfoPaneIcon src="wi-sunrise.svg" darkMode={darkMode}/>Sunrise 
                <br />
                <b>{sunriseFormatted.toLocaleTimeString()}</b>
                <br />
                <InfoPaneIcon src="wi-sunset.svg" darkMode={darkMode}/>Sunset
                <br />
                <b>{sunsetFormatted.toLocaleTimeString()}</b>
            </SkeletonSunriseAndSunset>
        </div>
    );
}