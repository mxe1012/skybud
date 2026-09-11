import type { VisiblityProps } from "../../../utils/types";

import { getVisibilityLabel, kmToMi } from "../../../utils/helpers";

export default function Visibility({visiblity, units, darkMode}: VisiblityProps) {

    const visStr = getVisibilityLabel(visiblity);
    const formatVis = units ? String(kmToMi(visiblity / 1000)) + " mi" : String(Math.round(visiblity / 1000)) + " km";

    const gaugeValue = String(visiblity / 10000);

    return (
        <div>
            <div className="gauge2" style={{"--value": gaugeValue, "--size": "90px", fontSize: "15px",
                "--background": darkMode ? "#3a3a3a" : "white"
            } as React.CSSProperties}>
                <b>{formatVis}</b>
            </div>
            {visStr}
        </div>
    );
}
