// import { useState } from "react";
// import { getLongitude, getLatitude, apiFetch } from './functions.tsx';

export function EventButton({text="", onClick}) {
    return <button className="EventButton" onClick={onClick}>{text}</button>
}

export function EventInput({value="", placeholder="Placeholder", onChange}) {
    return <input className="EventInput" value={value} placeholder={placeholder} onChange={onChange}/>
}

export function MainPane({children}) {
    return <div className="MainPane">{children}</div>;
}

export function InfoPaneContainer({children}) {
    return <div className="InfoPaneContainer">{children}</div>
}

export function WeatherInfoPaneContainer({children}) {
    return <div className="WeatherInfoPaneContainer">{children}</div>;
}

export function ExtraInfoPaneContainer({children}) {
    return <div className="ExtraInfoPaneContainer">{children}</div>;
}

export function ControllerPane({children}) {
    return <div className="ControllerPane">{children}</div>
}

export function InfoPane({name="", children}) {
    return (
        <>
            <span className="InfoPane">
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
            <span style={{backgroundColor: bgColor}} className="TimeDatePane">
                <h4 style={{color: textColor}}>Clock</h4>
                <div className="TimeDate">
                    <h1 style={{color: textColor}}>{time.toLocaleTimeString()}</h1>
                    <h2 style={{color: textColor}}>{time.toLocaleDateString()}</h2>
                </div>
            </span>
        </div>
    );
}

export function Weather({weather, weatherDesc, weatherIcon}) {

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

export function Temperature({temp, feelsLike, maxTemp, minTemp}) {

    return (
        <div>
            <div className="TemperatureGrid">
                <div style={{padding: '10px'}}>
                    Current {" "}
                    <h1><b>{Math.round(temp)}°F</b></h1>
                </div>
                <div style={{padding: '10px'}}>
                    Feels like {" "}
                    <h1>{Math.round(feelsLike)}°F</h1>
                </div>
                <div style={{padding: '10px'}}>
                    Max {" "}
                    <h2>{Math.round(maxTemp)}°F</h2>
                </div>
                <div style={{padding: '10px'}}>
                    Min {" "}
                    <h2>{Math.round(minTemp)}°F</h2>
                </div>
            </div>
            <br/>
            </div>
    );
}

export function Humidity({humidity}) {

    return (
        <div>
            <b>{humidity}%</b>
            <br />
        </div>
    );

}
