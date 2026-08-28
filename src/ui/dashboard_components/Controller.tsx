import { ControllerPaneContainer, EventInput, EventButton } from "../Containers";
import { useRef, useState, useEffect } from "react";

import { apiFetchLocations } from "../../utils/data";

import type { LocationEntry } from "../../utils/types";

export default function Controller({units, onSetUnits, disabled, onHandleFetch}) {

    const [locationName, setLocationName] = useState("");
    const [locationList, setLocationList] = useState<LocationEntry[]>([]);
    const [locationCoords, setLocationCoords] = useState({
        lon: 0,
        lat: 0
    });

    const [history, setHistory] = useState<LocationEntry[]>([]);

    const [isShowHisDrop, setisShowHisDrop] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);

    const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    
    function handleSearch(e) {
        const query = e.target.value;
        setLocationName(query);
    
        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }
    
        debounceTimer.current = setTimeout(() => {
                fetchLocations(query);
            }, 400); // debounce delay
    }
    
    async function fetchLocations(query) {
            
        try {
            const result = await apiFetchLocations(query);
    
            const newLocationList: LocationEntry[] = result.map((element) => {
    
            const {name, country, state, lon, lat} = element;
    
                return {
                    name,
                    country,
                    state,
                    lon,
                    lat
                    };
                });
    
                setLocationList(newLocationList);
    
            }
            catch (e) {
                console.error(e);
            }
    }
    
    useEffect(() => {
            const handleScroll = () => {
            const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 190);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <>
            <ControllerPaneContainer styles={{
                backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.5)' : "",
                backdropFilter: isScrolled ? "blur(2px)" : "",
                boxShadow: isScrolled ? "0px 0px 10px" : "",
                transition: "background-color 0.2s ease, backdrop-filter 0.2s ease, box-shadow 0.2s ease"
                }}>
                <div style={{textAlign: 'center'}}>
                    {" "}
                    <EventInput disabled={disabled} value={locationName} placeholder="Location" onChange={handleSearch}/>
                    {" "}
                    <EventButton text={isShowHisDrop ? "Hide History" : "Show History"} disabled={disabled} 
                    onClick={() => setisShowHisDrop(!isShowHisDrop)}/>
                    <ul className="locations">
                        {locationList.length == 0 ? "" : locationList.map((element, index) => (
                            <li key={index} className="locations" onClick={() => {
                                onHandleFetch(element.lon, element.lat);
                                setLocationCoords(element); 
                                setLocationList([]);
                                setHistory([
                                    ...history,
                                    element
                                ])
                            }}>
                                {element.state ? element.name + ", " + element.state + ", " + element.country : 
                                element.name + ", " + element.country}
                            </li>
                        ))}
                    </ul>
                    Units: 
                    <select id="unit" value={String(units)} onChange={() => {onSetUnits(Boolean(!units))}} disabled={disabled}>
                        <option value={"true"} onClick={() => onHandleFetch(locationCoords.lon, locationCoords.lat)}>Imperial</option>
                        <option value={"false"} onClick={() => onHandleFetch(locationCoords.lon, locationCoords.lat)}>Metric</option>
                    </select>
                    {" "}
                    <EventButton text="Update Weather Information" disabled={disabled} 
                        onClick={() => onHandleFetch(locationCoords.lon, locationCoords.lat)} />
                    {" "}
                    <EventButton text="Use Exact Location" disabled={disabled} 
                        onClick={() => onHandleFetch(locationCoords.lon, locationCoords.lat, true)} />
                    <br />
                    <ul className={isShowHisDrop ? "history show" : "history hide"}>
                        {history.length == 0 ? "" : history.map((element, index) => (
                            <li key={index} className={isShowHisDrop ? "history show" : "history hide"} onClick={() => {
                                onHandleFetch(element.lon, element.lat);
                                setLocationCoords(element);
                                setLocationName(element.name)
                            }}>
                                {element.state ? element.name + ", " + element.state + ", " + element.country : 
                                element.name + ", " + element.country}
                            </li>
                        ))}
                    </ul>
                </div>
            </ControllerPaneContainer>
        </>
    );
}
