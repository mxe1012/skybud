import type { SkeletonProps } from "../../utils/types";

export default function SkeletonLocationName({children, isLoaded, darkMode}: SkeletonProps) {

    if(!isLoaded) {
        return (
            <>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div className={ darkMode ? "skeleton dark skeleton-name" : "skeleton light skeleton-name"}></div>
                </div>
            </>
        )
    }
    return <>{children}</>;
}