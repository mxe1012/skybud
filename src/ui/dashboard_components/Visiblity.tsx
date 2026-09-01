import type { VisiblityProps } from "../../utils/types";

import { kmToMi } from "../../utils/helpers";

export default function Visibility({visiblity, units}: VisiblityProps) {

    let visStr;
    const formatVis = units ? String(kmToMi(visiblity / 1000)) + " mi" : String(visiblity / 1000) + " km";

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
            {formatVis}
        </div>
    );
}