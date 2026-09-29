import type { SearchListProps } from "../../../utils/types";

export default function SearchList({locationList, onFavorite, isFavorite, onLocationCoords, onLocationList, onHandleFetch, onCurrentLocation, checkRecentsLength, darkMode}: SearchListProps) {

    return (
        <ul style={{
            visibility: locationList.length == 0 ? "hidden" : "visible",
            display: locationList.length == 0 ? "none" : ""
        }} className={darkMode ? "locations dark" : "locations light"}>
            {locationList.map((element) => (
                <li className={darkMode ? "locations dark" : "locations light"}
                    key={`${element.lon}, ${element.lat}`}
                    onMouseDown={(e) => {
                        e.preventDefault();
                    }}
                    onClick={() => {
                        onHandleFetch(element.lon, element.lat);
                        onLocationCoords(element); 
                        onLocationList([]);
                        onCurrentLocation(element)
                        checkRecentsLength(element)
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
                                {isFavorite(element) ? "/assets/favorites/heart_filled.webp" : "/assets/favorites/heart_empty.webp"} 
                                width={10} height={10}/>
                            </button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}
