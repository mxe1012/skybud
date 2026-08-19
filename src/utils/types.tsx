import type { ReactNode } from "react";

export interface ChildrenProps {
    children: ReactNode;
}

export interface InfoPaneProps {
    name?: string;
    icon?: string;
    children: ReactNode;
}

export interface InfoPaneIconProps {
    src?: string;
    size?: number;
}

export interface WeatherProps {
    weather: WeatherObjectProps;
}

export interface WeatherObjectProps {
    main: string;
    description: string;
    icon: string;
}

export interface TemperatureProps {
    temperature: TempObjectProps;
    units: boolean;
}

export interface TempObjectProps {
    temp: number;
    feels_like: number;
    temp_max: number;
    temp_min: number;
}

export interface HumidityProps {
    humidity: number;
}

export interface WindProps {
    wind: WindObjectProps;
    units: boolean;
}

export interface WindObjectProps {
    speed: number;
    deg: number;
    gust: number;
}

export interface SunriseAndSunsetProps {
    sunrise: number
    sunset: number;
}
