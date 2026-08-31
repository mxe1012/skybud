import type { 
    ChildrenProps, 
    AppearanceProps,
    InfoPaneProps, 
    InfoPaneIconProps, 
    InfoPaneContainerProps,
    ControllerPaneContainerProps,
    EventButtonProps,
    EventInputProps
} from "../utils/types";

import { backgroundImageLookup } from "../utils/helpers";

export function MainPane({children}: ChildrenProps) {
    return <div className="MainPane">{children}</div>;
}

export function InfoPaneContainer({id, children}: InfoPaneContainerProps) {

    const bg = backgroundImageLookup(id);

    return <div style={{backgroundImage: bg}} className="InfoPaneContainer">{children}</div>
}

export function WeatherInfoPaneContainer({styles, className, children}: AppearanceProps) {
    return <div style={styles} className={className}>{children}</div>;
}

export function ExtraInfoPaneContainer({styles, className, children}: AppearanceProps) {
    return <div style={styles} className={className}>{children}</div>;
}

export function ControllerPaneContainer({styles, children}: ControllerPaneContainerProps) {
    return <div style={styles} className="ControllerPaneContainer">{children}</div>
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

export function EventButton({text="", styles, disabled=false, onClick}: EventButtonProps) {
    return <button style={styles} className="EventButton" disabled={disabled} onClick={onClick}>{text}</button>
}

export function EventInput({value="", styles, disabled=false, placeholder="Placeholder", onChange}: EventInputProps) {
    return <input style={styles} className="EventInput" disabled={disabled} value={value} placeholder={placeholder} onChange={onChange}/>
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
