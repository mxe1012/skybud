import { lightModeStyle, darkModeStyle } from "../../../utils/helpers";

import type { AuxListProps } from "../../../utils/types";

export default function RecentsList({list, visible, onVisible, onLocationCoords, onLocationName, onHandleFetch, onCurrentLocation, darkMode}: AuxListProps) {

    return (
        <ul className={visible ? (darkMode ? "recents dark show" : "recents light show") : "recents hide"}>
            {list.length == 0 && visible ? "No recent locations" : list.map((element) => (
                <li style={darkMode ? darkModeStyle : lightModeStyle}
                    key={`${element.lon}, ${element.lat}`} className={visible ? "recents show" : "recents hide"} 
                    onClick={() => {
                        onHandleFetch(element.lon, element.lat);
                        onLocationCoords(element);
                        onLocationName(element.name);
                        onCurrentLocation(element);
                        onVisible(false)
                    }}>
                    {element.state ? element.name + ", " + element.state + ", " + element.country : 
                    element.name + ", " + element.country}
                </li>
            ))}
        </ul>
    );
}
