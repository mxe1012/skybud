import type { 
    ChildrenProps, 
    AppearanceProps,
    InfoPaneProps, 
    InfoPaneIconProps, 
    InfoPaneContainerProps,
    ControllerPaneContainerProps,
    EventButtonProps,
    EventInputProps,
    ButtonIconProps,
    FavoriteButtonProps,
} from "../utils/types";

import { backgroundImageLookup } from "../utils/helpers";

export function MainPane({children}: ChildrenProps) {
    return <div className="MainPane">{children}</div>;
}

export function InfoPaneContainer({id, className, darkModeBG, children}: InfoPaneContainerProps) {

    const bg = backgroundImageLookup(id, darkModeBG);

    return <div style={{backgroundImage: bg}} className={className}>{children}</div>
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

export function ForecastInfoContainer({className, children}: AppearanceProps) {
    return (
        <>
            <div className={className}>
                <ul className="forecast">{children}</ul>
            </div>
        </>
    );
}

export function EventButton({text="", className, disabled=false, onClick}: EventButtonProps) {
    return <button className={className} disabled={disabled} onClick={onClick}>{text}</button>
}

export function EventInput({value="", className, disabled=false, placeholder="Placeholder", onChange}: EventInputProps) {
    return <input className={className} disabled={disabled} value={value} placeholder={placeholder} onChange={onChange}/>
}

export function InfoPaneIcon({src="wi-na.svg", size=25}: InfoPaneIconProps) {

    const img = "/assets/icons/" + src;

    return <img src={img} width={size} height={size} />;
}

export function ButtonIcon({className="", src="", size=25}: ButtonIconProps) {
    return <img className={className} src={src} width={size} height={size}/>
}

export function FavoriteButton({className="", btnIconSrc="", disabled=false, onClick}: FavoriteButtonProps) {
    return (
        <>
            <button className={className} disabled={disabled} onClick={onClick}>
                <ButtonIcon src={btnIconSrc} size={25}/>
            </button>
        </>
    )
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

export function ForecastInfoPane({className, children}: AppearanceProps) {
    return (
        <span className={className}>
            {children}
        </span>
    );
}
