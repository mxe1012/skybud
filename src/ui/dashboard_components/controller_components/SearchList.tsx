import type { SearchListProps } from "../../../utils/types";

export default function SearchList({locationList, onLocationCoords, onLocationList, onHandleFetch, onCurrentLocation, checkRecentsLength, darkMode}: SearchListProps) {

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
                    {element.state ? element.name + ", " + element.state + ", " + element.country : 
                    element.name + ", " + element.country}
                </li>
            ))}
        </ul>
    );
}
