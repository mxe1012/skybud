// import { useState } from "react";

import type { ChildrenProps, InfoPaneProps, 
    WeatherProps, TemperatureProps, 
    HumidityProps, WindProps, 
    SunriseAndSunsetProps, InfoPaneIconProps } from "../utils/types";

export function MainPane({children}: ChildrenProps) {
    return <div className="MainPane">{children}</div>;
}

export function InfoPaneContainer({children}: ChildrenProps) {
    return <div className="InfoPaneContainer">{children}</div>
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
                <h4 style={{color: textColor}}>Clock</h4>
                <div className="TimeDate">
                    <h1 style={{color: textColor}}>{time.toLocaleTimeString()}</h1>
                    <h2 style={{color: textColor}}>{time.toLocaleDateString()}</h2>
                </div>
            </span>
        </div>
    );
}

export function Weather({weather, weatherDesc, weatherIcon}: WeatherProps) {

    return (
        <div>
            <h1>{weather}</h1>
            <img src={weatherIcon} />
            <br />
            <h2>{weatherDesc}</h2>
            <br />
        </div>
    );
}

export function Temperature({temp, feelsLike, maxTemp, minTemp, units}: TemperatureProps) {

    return (
        <div>
            <div className="TemperatureGrid">
                <div style={{padding: '10px'}}>
                    Current {" "}
                    <h1><b>{units ? Math.round(temp) + "°F" : Math.round(temp) + "°C"}</b></h1>
                </div>
                <div style={{padding: '10px'}}>
                    Feels like {" "}
                    <h1><b>{units ? Math.round(feelsLike) + "°F" : Math.round(feelsLike) + "°C"}</b></h1>
                </div>
                <div style={{padding: '10px'}}>
                    Max {" "}
                    <h2>{units ? Math.round(maxTemp) + "°F" : Math.round(maxTemp) + "°C"}</h2>
                </div>
                <div style={{padding: '10px'}}>
                    Min {" "}
                    <h2>{units ? Math.round(minTemp) + "°F" : Math.round(minTemp) + "°C"}</h2>
                </div>
            </div>
            <br/>
            </div>
    );
}

export function Humidity({humidity}: HumidityProps) {

    return (
        <div>
            <b>{humidity}%</b>
            <br />
        </div>
    );

}

export function Wind({speed, degree, gust, units}: WindProps) {
    
    let compass;
    const compassIcon = "rotate(" + degree + "deg)";

    if ((degree >= 0 && degree < 90 ) || degree == 360) {
        compass = 'N';
    }
    else if (degree >= 90 && degree < 180) {
        compass = 'E';
    }
    else if (degree >= 180 && degree < 270) {
        compass = 'S';
    }
    else if (degree >= 270 && degree <= 350) {
        compass = 'W';
    }
    else {
        compass = '?'
    }

    return (
        <div>
            <img style={{transform: compassIcon}} src="./src/assets/icons/wi-wind-deg.svg" width={50} height={50}/>
            <br />
            <b>{units ? "Speed: " + Math.round(speed) + " mph" : "Speed: " + Math.round(speed) + " km/h"}</b>
            <br />
            <b>Direction: {degree}° ({compass})</b>
            <br />
            <b>{units ? "Gust: " + Math.round(gust) + " mph" : "Gust: " + Math.round(gust) + " km/h"}</b>
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
