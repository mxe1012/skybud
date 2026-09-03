import type { HumidityProps } from "../../utils/types";

export default function Humidity({humidity, darkMode}: HumidityProps) {

    const gaugeValue = String(humidity / 100);

    return (
        <div>
            <div className="gauge1" style={{"--value": gaugeValue, "--size": "90px", 
                "--background": darkMode ? "black" : "white"
            } as React.CSSProperties}>
                <b>{humidity}%</b>
            </div>
        </div>
    );
}