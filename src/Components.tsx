import { useState } from "react";
import { getLongitude, getLatitude, apiFetch } from './functions.tsx';


export function EventButton({text="", onClick}) {
    return <button className="EventButton" onClick={onClick}>{text}</button>
}

export function MainPane({children}) {
    return <div className="MainPane">{children}</div>;
}

export function InfoPaneContainer({children}) {
    return (
        <div style={{textAlign: 'center', padding: "15px"}}>
            <div className="InfoPaneContainer">{children}</div>
        </div>
    );
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
        <div style={{textAlign: 'center', padding: "15px"}}>
            <h1 style={{textAlign: "center", fontFamily: "comfortaa"}}>More Information</h1>
            <div className="ExtraInfoPaneContainer">{children}</div>
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
    const [maxTemp, setMaxTemp] = useState(0);
    const [minTemp, setMinTemp] = useState(0);

    async function handleClick() {
        const lon = await getLongitude();
        const lat = await getLatitude();

        console.log(lon);
        console.log(lat);
        
        try {
            const result = await apiFetch(lon, lat);
            setTemp(result.main.temp);
            setFeelsLike(result.main.feels_like);
            setMaxTemp(result.main.temp_max);
            setMinTemp(result.main.temp_min);
            console.log(result.main);
        }  
        catch (e) {
           console.error(e);
            alert("something went wrong");
        } 

    }

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
                <EventButton text="Update" onClick={handleClick}/>
            </div>
    );
}

export function Humidity() {

    const [humidity, setHumidity] = useState(0);

    async function handleClick() {
        const lon = await getLongitude();
        const lat = await getLatitude();

        console.log(lon);
        console.log(lat);

        try {
            const result = await apiFetch(lon, lat);
            setHumidity(result.main.humidity);
            console.log(result.main);
        }  
        catch (e) {
            console.error(e);
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
        const lon = await getLongitude();
        const lat = await getLatitude();

        console.log(lon);
        console.log(lat);

        try {
            const result = await apiFetch(lon, lat);
            setWeather(result.weather[0].main);
            setWeatherDesc(result.weather[0].description);
            setIcon(iconUrl + result.weather[0].icon + ".png");
            console.log(result.weather[0]);
        }  
        catch (e) {
            console.error(e);
            alert("something went wrong");
        } 

    }

    return (
        <div>
            <h1>{weather}</h1>
            <img src={icon} />
            <br />
            <h2>{weatherDesc}</h2>
            <br />
            <EventButton text="Update" onClick={handleClick} />
        </div>
    );
}
