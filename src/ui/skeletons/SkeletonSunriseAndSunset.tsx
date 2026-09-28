import type { SkeletonProps } from "../../utils/types";

export default function SkeletonSunriseAndSunset({children, isLoaded, darkMode}: SkeletonProps) {

    if(!isLoaded) {
        return (
            <>
                <div>
                    <div className={darkMode ? "skeleton dark skeleton-suntime" : "skeleton light skeleton-suntime"}></div>
                    <br />
                    <div className={darkMode ? "skeleton dark skeleton-suntime" : "skeleton light skeleton-suntime"}></div>
                </div>
            </>
        )
    }
    return <>{children}</>;
}