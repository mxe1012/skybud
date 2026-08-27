import type { VisiblityProps } from "../../utils/types";

export default function Visibility({visiblity}: VisiblityProps) {

    let visStr
    const gaugeValue = String(visiblity / 10000);

    if (visiblity >= 7500) {
        visStr = "High";
    }
    else if (visiblity < 7500 && visiblity >= 5000) {
        visStr = "Medium";
    }
    else if (visiblity < 5000) {
        visStr = "Low";
    }

    return (
        <div>
            <div className="gauge2" style={{"--value": gaugeValue, "--size": "90px", fontSize: "15px"} as React.CSSProperties}>
                <b>{visStr}</b>
            </div>
        </div>
    );
}