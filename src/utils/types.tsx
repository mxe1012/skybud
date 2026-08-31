/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from "react";
import type { ReactNode } from "react";

export interface ChildrenProps {
    children: ReactNode;
}

export interface InfoPaneContainerProps {
    id: number;
    className?: string;
    darkModeBG: boolean;
    children: ReactNode;
}

export interface ControllerPaneContainerProps {
    children: ReactNode;
    styles?: React.CSSProperties;
}

export interface AppearanceProps {
    children: ReactNode;
    styles?: React.CSSProperties;
    className?: string;
}

export interface EventButtonProps {
    text: string;
    styles?: React.CSSProperties;
    disabled: boolean;
    onClick: any;
}

export interface EventInputProps {
    value: string;
    styles?: React.CSSProperties;
    disabled: boolean;
    placeholder: string;
    onChange: any;
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
    id: number;
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

export interface VisiblityProps {
    visiblity: number;
    units: boolean;
}

export interface SunriseAndSunsetProps {
    sunrise: number
    sunset: number;
}

export interface ForecastInfoProps {
    dt: number;
    weather: ForecastInfoObjectWeatherProps;
    temperature: ForecastInfoObjectTemperatureProps;
    units: boolean;
}

export interface ForecastInfoObjectWeatherProps {
    main: string;
    icon: string;
}

export interface ForecastInfoObjectTemperatureProps {
    temp_max: number;
    temp_min: number;
}

export interface ForecastEntry {
    dt: number;
    main: string;
    icon: string;
    temp_max: number;
    temp_min: number;
}

export interface CurrentWeatherProps {
    weather: WeatherObjectProps;
    temperature: TempObjectProps;
    humidity: number;
    wind: WindObjectProps;
    visibility: number;
    sunset: number;
    sunrise: number;
    units: boolean;
    darkMode: boolean;
}

export interface ForecastProps {
    forecastList: ForecastEntry[];
    units: boolean;
    darkMode: boolean;
}

export interface LocationEntry {
    name: string;
    country: string;
    state: string;
    lon: number;
    lat: number;
}
