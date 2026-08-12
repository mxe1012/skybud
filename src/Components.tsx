/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { getLongitude, getLatitude, apiFetch } from './functions.tsx';

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

    const [error, setError] = useState("");

    async function handleClick() {
        let lon = getLongitude();
        let lat = getLatitude();
        
        console.log(lon);
        console.log(lat);

        try {
      const result = await apiFetch(lon, lat);
      //console.log(result);
      setTemp(result.main.temp);
      setFeelsLike(result.main.feels_like)
      console.log(result.main);
    } catch (e) {
      setError("something went wrong");
    } 

    }

    return (
        <div>
            <p>{temp}</p>
            <p>{feelsLike}</p>
            <br />
            <EventButton text="Update" onClick={handleClick}/>
        </div>
    );
}

export function EventButton({text="", onClick}) {
    return <button onClick={onClick}>{text}</button>
}
