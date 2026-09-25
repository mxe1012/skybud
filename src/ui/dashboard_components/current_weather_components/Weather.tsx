import type { WeatherProps } from "../../../utils/types";
import SkeletonWeather from "../../skeletons/SkeletonWeather";

export default function Weather({weather, isLoaded, darkMode}: WeatherProps) {

    const {main, description, icon} = weather;

    return (
        <div>
            <SkeletonWeather isLoaded={isLoaded} darkMode={darkMode}>
                <h1>{main}</h1>
                <img src={icon} width={115} height={115} alt="Icon" />
                <br />
                <h2>{description}</h2>
                <br />
            </SkeletonWeather>
        </div>
    );
}
