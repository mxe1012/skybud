import type { SkeletonProps } from "../../utils/types";

export default function SkeletonForecast({children, isLoaded, darkMode}: SkeletonProps) {

    if(!isLoaded) {
        return (
            <>
                <h1 style={{color: darkMode ? 'whitesmoke' : 'black', textAlign: 'center'}}>Forecast</h1>
                <div className={darkMode ? "skeleton dark skeleton-forecast" : "skeleton light skeleton-forecast"}></div>
            </>
        )
    }
    return <>{children}</>;
}