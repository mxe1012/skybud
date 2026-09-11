import { lightModeStyle, darkModeStyle } from "../../../utils/helpers";

import type { LocationEntry, RecentListProps } from "../../../utils/types";

export default function RecentsList({recents, visible, onLocationCoords, onLocationName, onHandleFetch, onCurrentLocation, darkMode}: RecentListProps) {

    const list: LocationEntry[] = recents;

    return (
        <ul className={visible ? "recents show" : "recents hide"}>
            {list.map((element) => (
                <li style={darkMode ? darkModeStyle : lightModeStyle}
                    key={`${element.lon}, ${element.lat}`} className={visible ? "recents show" : "recents hide"} onClick={() => {
                    onHandleFetch(element.lon, element.lat);
                    onLocationCoords(element);
                    onLocationName(element.name)
                    onCurrentLocation(element)
                 }}>
                    {element.state ? element.name + ", " + element.state + ", " + element.country : 
                    element.name + ", " + element.country}
                </li>
            ))}
         </ul>
    );
}
