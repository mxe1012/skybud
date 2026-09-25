import type { SkeletonProps } from "../../utils/types";

export default function SkeletonWeather({children, isLoaded, darkMode}: SkeletonProps) {

    if(!isLoaded) {
        return (
            <div>
                <div className={darkMode ? "skeleton dark skeleton-weather-main" : "skeleton light skeleton-weather-main"}></div>
                <div className={darkMode ? "skeleton dark skeleton-weather-icon" : "skeleton light skeleton-weather-icon"}></div>
                <br />
                <div className={darkMode ? "skeleton dark skeleton-weather-desc" : "skeleton light skeleton-weather-desc"}></div>
                <br />
            </div>
        );
    }
    return <>{children}</>
}