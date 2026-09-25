import type { SkeletonProps } from "../../utils/types";

export default function SkeletonWind({children, isLoaded, darkMode}: SkeletonProps) {

    if(!isLoaded) {
        return (
            <div>
                <div className={darkMode ? "skeleton dark skeleton-wind-deg" : "skeleton light skeleton-wind-deg"}></div>
                
                <div className={darkMode ? "skeleton dark skeleton-wind-info" : "skeleton light skeleton-wind-info"}></div>
                
                <div className={darkMode ? "skeleton dark skeleton-wind-info" : "skeleton light skeleton-wind-info"}></div>
                
                <div className={darkMode ? "skeleton dark skeleton-wind-info" : "skeleton light skeleton-wind-info"}></div>
            </div>
        )
    }
    return <>{children}</>
}