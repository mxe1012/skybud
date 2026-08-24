import type { ChildrenProps, 
    InfoPaneProps, 
    WeatherProps, 
    TemperatureProps, 
    HumidityProps, 
    WindProps, 
    SunriseAndSunsetProps, 
    InfoPaneIconProps, 
    ForecastInfoProps, 
    InfoPaneContainerProps
} from "../utils/types";

import { optimizedCompass, backgroundImageLookup } from "../utils/helpers";

export function MainPane({children}: ChildrenProps) {
    return <div className="MainPane">{children}</div>;
}

export function InfoPaneContainer({id, children}: InfoPaneContainerProps) {

    const bg = backgroundImageLookup(id);

    return <div style={{backgroundImage: bg}} className="InfoPaneContainer">{children}</div>
}

export function WeatherInfoPaneContainer({children}: ChildrenProps) {
    return <div className="WeatherInfoPaneContainer">{children}</div>;
}

export function ExtraInfoPaneContainer({children}: ChildrenProps) {
    return <div className="ExtraInfoPaneContainer">{children}</div>;
}

export function ControllerPaneContainer({children}: ChildrenProps) {
    return <div className="ControllerPaneContainer">{children}</div>
}

export function ForecastInfoContainer({children}: ChildrenProps) {
    return (
        <>
            <h1 style={{textAlign: 'center'}}>Forecast</h1>
            <div className="ForecastInfoContainer">
                <ul>{children}</ul>
            </div>
        </>
    );
}

export function EventButton({text="", disabled=false, onClick}) {
    return <button className="EventButton" disabled={disabled} onClick={onClick}>{text}</button>
}

export function EventInput({value="", placeholder="Placeholder", onChange}) {
    return <input className="EventInput" value={value} placeholder={placeholder} onChange={onChange}/>
}

export function InfoPaneIcon({src="wi-na.svg", size=25}: InfoPaneIconProps) {

    const img = "./src/assets/icons/" + src;

    return <img src={img} width={size} height={size} />;
}

export function InfoPane({name="", icon="wi-na.svg", children}: InfoPaneProps) {

    return (
        <>
            <span className="InfoPane">
            <InfoPaneIcon src={icon} size={35} />
            <p>{name}</p>
                {children}
            </span>
        </>
    );
}

export function ForecastInfoPane({children}: ChildrenProps) {
    return (
        <span className="ForecastInfoPane">
            {children}
        </span>
    );
}

export function Clock() {

    const time = new Date();
    
    let textColor;
    let bgColor;

    if(time.getHours() >= 19 && time.getHours() <= 23) {
        textColor = 'white';
        bgColor = 'black';
    }
    else {
        textColor = 'black';
        bgColor = 'white';
    }

    return (
        <div className="Clock">
            <span style={{backgroundColor: bgColor, transform: "scale(1)"}} className="ClockTimeDatePane">
                <div className="TimeDate">
                    <h1 style={{color: textColor}}>{time.toLocaleTimeString()}</h1>
                    <h2 style={{color: textColor}}>{time.toLocaleDateString()}</h2>
                </div>
            </span>
        </div>
    );
}

export function Weather({weather}: WeatherProps) {

    const {main, description, icon} = weather;

    return (
        <div>
            <h1>{main}</h1>
            <img src={icon} />
            <br />
            <h2>{description}</h2>
            <br />
        </div>
    );
}

export function Temperature({temperature, units}: TemperatureProps) {

    const {temp, feels_like, temp_max, temp_min} = temperature

    return (
        <div>
            <div className="TemperatureGrid">
                <div style={{padding: '10px'}}>
                    Current {" "}
                    <h1><b>{units ? Math.round(temp) + "°F" : Math.round(temp) + "°C"}</b></h1>
                </div>
                <div style={{padding: '10px'}}>
                    Feels like {" "}
                    <h1><b>{units ? Math.round(feels_like) + "°F" : Math.round(feels_like) + "°C"}</b></h1>
                </div>
                <div style={{padding: '10px'}}>
                    High {" "}
                    <h2>{units ? Math.round(temp_max) + "°F" : Math.round(temp_max) + "°C"}</h2>
                </div>
                <div style={{padding: '10px'}}>
                    Low {" "}
                    <h2>{units ? Math.round(temp_min) + "°F" : Math.round(temp_min) + "°C"}</h2>
                </div>
            </div>
            <br/>
            </div>
    );
}

export function Humidity({humidity}: HumidityProps) {

    const gaugeValue = String(humidity / 100);
    
    return (
        <div>
            <div className="gauge" style={{"--value": gaugeValue, "--size": "90px"}}><b>{humidity}%</b></div>
        </div>
    );
}

export function Wind({wind, units}: WindProps) {
    
    const {speed, deg, gust} = wind;

    const compass = optimizedCompass(deg);
    const compassIcon = "rotate(" + deg + "deg)";

    const speedStr = units ? "Speed: " + Math.round(speed) + " mph" : "Speed: " + Math.round(speed) + " m/s";

    const gustStr = !gust ? "Gust: 0 mph" : 
    units ? "Gust: " + Math.round(gust) + " mph" : "Gust: " + Math.round(gust) + " m/s";

    return (
        <div>
            <img style={{transform: compassIcon}} src="./src/assets/icons/wi-wind-deg.svg" width={50} height={50}/>
            <br />
            <b>{speedStr}</b>
            <br />
            <b>Direction: {deg}° ({compass})</b>
            <br />
            <b>{gustStr}</b>
        </div>
    );

}

export function SunriseAndSunset({sunrise, sunset}: SunriseAndSunsetProps) {

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

export function ForecastItem({dt, weather, temperature, units}: ForecastInfoProps) {

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
