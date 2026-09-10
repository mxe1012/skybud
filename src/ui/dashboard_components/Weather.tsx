import type { WeatherProps } from "../../utils/types";

export default function Weather({weather}: WeatherProps) {

    const {main, description, icon} = weather;

    return (
        <div>
            <h1>{main}</h1>
            <img src={icon} width={115} height={115} alt="Icon" />
            <br />
            <h2>{description}</h2>
            <br />
        </div>
    );
}
