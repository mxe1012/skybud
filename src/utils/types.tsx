import type { ReactNode } from "react";

export interface ChildrenProps {
    children: ReactNode;
}

export interface InfoPaneProps {
    name?: string;
    children: ReactNode;
}

export interface WeatherProps {
    weather: string;
    weatherDesc: string;
    weatherIcon: string;
}

export interface TemperatureProps {
    temp: number;
    feelsLike: number;
    maxTemp: number;
    minTemp: number;
    units: boolean;
}

export interface HumidityProps {
    humidity: number;
}

export interface WindProps {
    speed: number;
    degree: number;
    gust: number;
    units: boolean;
}
