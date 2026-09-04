import type { SearchListProps } from "../../utils/types";

export default function SearchList({locationList, onLocationCoords, onLocationList, onHandleFetch, checkRecentsLength, darkMode}: SearchListProps) {

    return (
        <ul className="locations">
            {locationList.length == 0 ? "" : locationList.map((element, index) => (
                <li className={darkMode ? "locations dark" : "locations light"}
                    key={index} onClick={() => {
                    onHandleFetch(element.lon, element.lat);
                    onLocationCoords(element); 
                    onLocationList([]);
                    checkRecentsLength(element)
                }}>
                    {element.state ? element.name + ", " + element.state + ", " + element.country : 
                    element.name + ", " + element.country}
                </li>
            ))}
        </ul>
    );
}
