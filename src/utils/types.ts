/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from "react";
import type { ReactNode, Dispatch, SetStateAction } from "react";

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
    disabled: boolean;
    className?: string;
    onClick: any;
}

export interface EventInputProps {
    value: string;
    className?: string;
    disabled: boolean;
    placeholder: string;
    onChange: any;
    onBlur?: any;
}

export interface InfoPaneProps {
    name?: string;
    icon?: string;
    darkModeIcon: boolean;
    children: ReactNode;
}

export interface ButtonIconProps {
    className?: string;
    src?: string;
    size?: number;
}

export interface FavoriteButtonProps {
    className?: string;
    btnIconSrc?: string;
    disabled: boolean;
    onClick: any;
}

export interface InfoPaneIconProps {
    src?: string;
    darkMode: boolean;
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
    darkMode: boolean;
}

export interface WindProps {
    wind: WindObjectProps;
    units: boolean;
    darkMode: boolean;
}

export interface WindObjectProps {
    speed: number;
    deg: number;
    gust: number;
}

export interface VisiblityProps {
    visiblity: number;
    units: boolean;
    darkMode: boolean;
}

export interface SunriseAndSunsetProps {
    sunTime: SunriseAndSunsetObjectProps;
    darkMode: boolean;
}

export interface SunriseAndSunsetObjectProps {
    sunrise: number;
    sunset: number;
}

export interface ForecastItemProps {
    forecast: ForecastEntry;
    units: boolean;
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
    sunTime: SunriseAndSunsetObjectProps;
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

export interface DashboardProps {
    darkMode: boolean;
}

export interface ControllerProps {
    currentLocationName: string;
    units: boolean;
    onSetUnits: Dispatch<SetStateAction<boolean>>;
    disabled: boolean;
    onHandleFetch: (lon: number, lat: number, useExactLocation?: boolean) => Promise<void>;
    darkMode: boolean;
}

export interface SearchListProps {
    locationList: LocationEntry[];
    onLocationCoords: Dispatch<SetStateAction<{
        lon: number;
        lat: number;
    }>>;
    onLocationList:  Dispatch<SetStateAction<LocationEntry[]>>;
    onHandleFetch: (lon: number, lat: number, useExactLocation?: boolean) => Promise<void>;
    onCurrentLocation:  Dispatch<SetStateAction<LocationEntry>>;
    checkRecentsLength: (element: LocationEntry) => void;
    darkMode: boolean;
}


export interface AuxListProps {
    list: LocationEntry[]
    visible: boolean;
    onVisible: Dispatch<SetStateAction<boolean>>;
    onLocationCoords: Dispatch<SetStateAction<{
        lon: number;
        lat: number;
    }>>;
    onLocationName: Dispatch<SetStateAction<string>>;
    onHandleFetch: (lon: number, lat: number, useExactLocation?: boolean) => Promise<void>;
    onCurrentLocation: Dispatch<SetStateAction<LocationEntry>>;
    darkMode: boolean;
}

export interface LocationNameProps {
    currentLocationName: string;
    disabled: boolean;
    onHandleFavorites: () => void;
    darkMode: boolean;
}

export interface SnackbarContextType {
    showSnackbar: (message: string, duration?: number) => void;
}

export interface MiniClockProps {
    time: string;
    darkMode: boolean;
}