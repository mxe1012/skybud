import { lightModeStyle, darkModeStyle } from "../../../utils/helpers";

import type { AuxListProps } from "../../../utils/types";

export default function FavoritesList({list, onList, onDelete, visible, onVisible, onLocationCoords, onLocationName, onHandleFetch, onCurrentLocation, darkMode}: AuxListProps ){

    return (
        <ul className={visible ? (darkMode ? "favorites dark show" : "favorites light show") : "favorites hide"}>
            {list.length == 0 && visible ? "No favorite locations" : list.map((element) => (
                <li style={darkMode ? darkModeStyle : lightModeStyle}
                    key={`${element.lon}, ${element.lat}`} className={visible ? "favorites show" : "favorites hide"} 
                    onClick={() => {
                        onHandleFetch(element.lon, element.lat);
                        onLocationCoords(element); 
                        onLocationName(element.name);
                        onCurrentLocation(element);
                        onVisible(false)
                    }}>
                    {element.state ? element.name + ", " + element.state + ", " + element.country : 
                    element.name + ", " + element.country} 
                    {" "}
                    <button className="ListButton"
                    onClick={(e) => {
                        e.stopPropagation(); 
                        onList(onDelete(list, element));
                    }}
                    >
                        X
                    </button>
                </li> 
            ))}
        </ul>
    );
}
