import type { HumidityProps } from "../../../utils/types";
import SkeletonHumidity from "../../skeletons/SkeletonHumidity";

export default function Humidity({humidity, darkMode, isLoaded}: HumidityProps) {

    const gaugeValue = String(humidity / 100);

    return (
        <div>
            <SkeletonHumidity isLoaded={isLoaded} darkMode={darkMode}>
                <div className="gauge1" style={{"--value": gaugeValue, "--size": "90px", 
                    "--background": darkMode ? "#3a3a3a" : "whitesmoke"
                } as React.CSSProperties}>
                    <b>{humidity}%</b>
                </div>
            </SkeletonHumidity>
        </div>
    );
}