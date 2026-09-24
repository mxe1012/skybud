import type { HumidityProps } from "../../../utils/types";

export default function Humidity({humidity, darkMode}: HumidityProps) {

    const gaugeValue = String(humidity / 100);

    return (
        <div>
            <div className="gauge1" style={{"--value": gaugeValue, "--size": "90px", 
                "--background": darkMode ? "#3a3a3a" : "whitesmoke"
            } as React.CSSProperties}>
                <b>{humidity}%</b>
            </div>
        </div>
    );
}