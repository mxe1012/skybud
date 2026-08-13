/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { getLongitude, getLatitude, apiFetch } from './functions.tsx';


export function EventButton({text="", onClick}) {
    return <button className="EventButton" onClick={onClick}>{text}</button>
}

export function MainPane({children}) {
    return <div className="MainPane">{children}</div>;
}

export function InfoPaneContainer({children}) {
    return <div className="InfoPaneContainer">{children}</div>;
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

export function ExtraInfoPaneContainer({children}) {
    return (
        <div style={{textAlign: 'center'}}>
            <h1 style={{textAlign: "center", fontFamily: "comfortaa"}}>More Information</h1>
            <div className="ExtraInfoPaneContainer">
                {children}
            </div>
        </div>
    );
}

export function TimeDate() {
    const time = new Date();

    return (
    <div className="TimeDate">
      <h1>{time.toLocaleTimeString()}</h1>
      <h2>{time.toLocaleDateString()}</h2>
    </div>
  );
}

export function Temperature() {

    const [temp, setTemp] = useState(0);
    const [feelsLike, setFeelsLike] = useState(0);

    async function handleClick() {
        // let lon = getLongitude();
        // let lat = getLatitude();

        try {
            const result = await apiFetch(-75.95723099199999, 40.395179184);
            setTemp(result.main.temp);
            setFeelsLike(result.main.feels_like)
            console.log(result.main);
        }  
        catch (e) {
            alert("something went wrong");
        } 

    }

    return (
        <div>
            <p style={{fontSize: '36px'}}><b>{Math.round(temp)}°F</b></p>
            Feels like: {""}
            <b>{Math.round(feelsLike)}°F</b>
            <br />
            <br />
            <EventButton text="Update" onClick={handleClick}/>
        </div>
    );
}

export function Humidity() {

    const [humidity, setHumidity] = useState(0);

    async function handleClick() {
        // let lon = getLongitude();
        // let lat = getLatitude();

        try {
            const result = await apiFetch(-75.95723099199999, 40.395179184);
            setHumidity(result.main.humidity);
            console.log(result.main);
        }  
        catch (e) {
            alert("something went wrong");
        } 

    }

    return (
        <div>
            <b>{humidity}%</b>
            <br />
            <EventButton text="Update" onClick={handleClick} />
        </div>
    );

}


export function Weather() {

    const [weather, setWeather] = useState("");
    const [weatherDesc, setWeatherDesc] = useState("");
    const [icon, setIcon] = useState("")

    const iconUrl = "https://openweathermap.org/payload/api/media/file/"

    async function handleClick() {
        // let lon = getLongitude();
        // let lat = getLatitude();

        try {
            const result = await apiFetch(-75.95723099199999, 40.395179184);
            setWeather(result.weather[0].main);
            setWeatherDesc(result.weather[0].description);
            setIcon(iconUrl + result.weather[0].icon + ".png");
            console.log(result.weather[0]);
        }  
        catch (e) {
            alert("something went wrong");
        } 

    }

    return (
        <>
        {weather}
        <br />
         <img src={icon} />
        <br />
        {weatherDesc}
        <br />
        <EventButton text="Update" onClick={handleClick} />
        </>
    );

}
