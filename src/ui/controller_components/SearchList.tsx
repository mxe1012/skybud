import type { SearchListProps } from "../../utils/types";

export default function SearchList({locationList, onLocationCoords, onLocationList, onHandleFetch, onCurrentLocation, checkRecentsLength, darkMode}: SearchListProps) {

    return (
        <ul className="locations">
            {locationList.length == 0 ? "" : locationList.map((element) => (
                <li className={darkMode ? "locations dark" : "locations light"}
                    key={`${element.lon}, ${element.lat}`} onClick={() => {
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
