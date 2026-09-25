import type { SkeletonProps } from "../../utils/types";

export default function SkeletonTemperature({children, isLoaded, darkMode}: SkeletonProps) {

    if(!isLoaded) {
            return (
                <div>
                    <div className="TemperatureGrid">
                        <div style={{padding: '10px'}}>
                            <div className={darkMode ? "skeleton dark skeleton-temperature-head" : "skeleton light skeleton-temperature-head"}></div>
                            <div className={darkMode ? "skeleton dark skeleton-temperature" : "skeleton light skeleton-temperature"}></div>
                        </div>
                        <div style={{padding: '10px'}}>
                            <div className={darkMode ? "skeleton dark skeleton-temperature-head" : "skeleton light skeleton-temperature-head"}></div>
                            <div className={darkMode ? "skeleton dark skeleton-temperature" : "skeleton light skeleton-temperature"}></div>
                        </div>
                        <div style={{padding: '10px'}}>
                            <div className={darkMode ? "skeleton dark skeleton-temperature-head" : "skeleton light skeleton-temperature-head"}></div>
                            <div className={darkMode ? "skeleton dark skeleton-temperature" : "skeleton light skeleton-temperature"}></div>
                        </div>
                        <div style={{padding: '10px'}}>
                            <div className={darkMode ? "skeleton dark skeleton-temperature-head" : "skeleton light skeleton-temperature-head"}></div>
                            <div className={darkMode ? "skeleton dark skeleton-temperature" : "skeleton light skeleton-temperature"}></div>
                        </div>
                    </div>
                    <br/>
            </div>
        )
    }
    return <>{children}</>
}