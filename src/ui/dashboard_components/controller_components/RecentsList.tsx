import { lightModeStyle, darkModeStyle } from "../../../utils/helpers";

import type { AuxListProps } from "../../../utils/types";

export default function RecentsList({list, onList, onDelete, onFavorite, isFavorited, visible, onVisible, onLocationCoords, onLocationName, onHandleFetch, onCurrentLocation, darkMode}: AuxListProps) {

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
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div>
                            {element.state ? element.name + ", " + element.state + ", " + element.country : 
                            element.name + ", " + element.country}
                        </div>
                        <div>
                            <button className="ListButton"
                            onClick={(e) => {
                                e.stopPropagation();
                                onFavorite?.(element);
                            }}>
                                <img src=
                                {isFavorited ? "/assets/favorites/heart_filled.webp" : "/assets/favorites/heart_empty.webp"} 
                                width={10} height={10}/>
                            </button>
                            {" "}
                            <button className="ListButton" 
                            onClick={(e) => {
                                e.stopPropagation(); 
                                onList(onDelete(list, element));
                            }}>
                                X
                            </button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}
