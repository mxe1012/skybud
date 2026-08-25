import type { HumidityProps } from "../../utils/types";

export default function Humidity({humidity}: HumidityProps) {

    const gaugeValue = String(humidity / 100);
    
    return (
        <div>
            <div className="gauge" style={{"--value": gaugeValue, "--size": "90px"} as React.CSSProperties}>
                <b>{humidity}%</b>
            </div>
        </div>
    );
}