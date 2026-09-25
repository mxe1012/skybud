import type { WindProps } from "../../../utils/types";

import { optimizedCompass, milesPerHourtoMS } from "../../../utils/helpers";
import SkeletonWind from "../../skeletons/SkeletonWind";

export default function Wind({wind, units, darkMode, isLoaded}: WindProps) {
    
    const {speed, deg, gust} = wind;

    const compass = optimizedCompass(deg);
    const compassIcon = "rotate(" + deg + "deg)";

    const speedStr = units ? "Speed: " + Math.round(speed) + " mph" : "Speed: " + milesPerHourtoMS(speed) + " m/s";

    const gustStr = !gust ? "Gust: 0 mph" : 
    units ? "Gust: " + Math.round(gust) + " mph" : "Gust: " + milesPerHourtoMS(gust) + " m/s";

    return (
        <div>
            <SkeletonWind isLoaded={isLoaded} darkMode={darkMode}>
                <img style={{filter: darkMode ? 'invert(1)' : "", transform: compassIcon}} src="/assets/icons/wi-wind-deg.svg" width={50} height={50} alt="Icon"/>
                <br />
                <b>{speedStr}</b>
                <br />
                <b>Direction: {deg}° ({compass})</b>
                <br />
                <b>{gustStr}</b>
            </SkeletonWind>
        </div>
    );
}