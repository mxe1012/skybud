import { lightModeStyle, darkModeStyle } from "../../utils/helpers";

import type { FavoritesListProps, LocationEntry } from "../../utils/types";

export default function FavoritesList({favorites, visible, onLocationCoords, onLocationName, onHandleFetch, darkMode}: FavoritesListProps ){

    const list: LocationEntry[] = favorites;

    return (
        <ul className={visible ? "favorites show" : "favorites hide"}>
            {list.length == 0 ? "" : list.map((element) => (
                <li style={darkMode ? darkModeStyle : lightModeStyle}
                    key={`${element.lon}, ${element.lat}`} className={visible ? "favorites show" : "favorites hide"} onClick={() => {
                    onHandleFetch(element.lon, element.lat);
                    onLocationCoords(element); 
                    onLocationName(element.name);
                }}>
                    {element.state ? element.name + ", " + element.state + ", " + element.country : 
                    element.name + ", " + element.country} 
                </li> 
            ))}
        </ul>
    );
}
