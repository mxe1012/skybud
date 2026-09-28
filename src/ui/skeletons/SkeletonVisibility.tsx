import type { SkeletonProps } from "../../utils/types";

export default function SkeletonVisibility({children, isLoaded, darkMode}: SkeletonProps) {

    if(!isLoaded) {
        return (
            <>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <div className={darkMode ? "skeleton dark skeleton-gauge" : "skeleton light skeleton-gauge"}></div>
                </div>
            </>
        )
    }
    return <>{children}</>;
}