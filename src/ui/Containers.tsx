import type { 
    ChildrenProps, 
    InfoPaneProps, 
    InfoPaneIconProps, 
    InfoPaneContainerProps
} from "../utils/types";

import { backgroundImageLookup } from "../utils/helpers";

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
                <ul className="forecast">{children}</ul>
            </div>
        </>
    );
}

export function EventButton({text="", disabled=false, onClick}) {
    return <button className="EventButton" disabled={disabled} onClick={onClick}>{text}</button>
}

export function EventInput({value="", disabled=false, placeholder="Placeholder", onChange}) {
    return <input className="EventInput" disabled={disabled} value={value} placeholder={placeholder} onChange={onChange}/>
}

export function InfoPaneIcon({src="wi-na.svg", size=25}: InfoPaneIconProps) {

    const img = "/assets/icons/" + src;

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
