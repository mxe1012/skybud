import { lightModeStyle, darkModeStyle } from "../../utils/helpers";

import type { RecentListProps } from "../../utils/types";

export default function RecentsList({recents, visible, onLocationCoords, onLocationName, onHandleFetch, darkMode}: RecentListProps) {

    return (
        <ul className={visible ? "recents show" : "recents hide"}>
            {recents.map((element, index) => (
                <li style={darkMode ? darkModeStyle : lightModeStyle}
                    key={index} className={visible ? "recents show" : "recents hide"} onClick={() => {
                    onHandleFetch(element.lon, element.lat);
                    onLocationCoords(element);
                    onLocationName(element.name)
                 }}>
                    {element.state ? element.name + ", " + element.state + ", " + element.country : 
                    element.name + ", " + element.country}
                </li>
            ))}
         </ul>
    );
}
