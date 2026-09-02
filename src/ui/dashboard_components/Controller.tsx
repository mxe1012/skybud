import { ControllerPaneContainer, EventInput, EventButton } from "../Containers";
import { useRef, useState, useEffect } from "react";

import { apiFetchLocations } from "../../utils/data";

import { lightModeStyle, darkModeStyle } from "../../utils/helpers";

import type { LocationEntry } from "../../utils/types";

export default function Controller({units, onSetUnits, disabled, onHandleFetch, darkMode}) {

    const [locationName, setLocationName] = useState("");
    const [locationList, setLocationList] = useState<LocationEntry[]>([]);
    const [locationCoords, setLocationCoords] = useState({
        lon: 0,
        lat: 0
    });

    const [recents, setRecents] = useState<LocationEntry[]>([]);
    const [isShowRecentsDrop, setisShowRecentsDrop] = useState(false)

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
    
    async function fetchLocations(query: string) {
            
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

    function checkRecentsLength(list, element) {
        if (list.length >= 5) {
            list.shift()
            setRecents([
                ...list,
                element
            ])
        }
        else {
            setRecents([
                ...list,
                element
            ])
        }

    }
    
    useEffect(() => {
            const handleScroll = () => {
            const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 36);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    let bgColorStr;
    let boxShadowStr;

    if (isScrolled && darkMode == false) {
        bgColorStr = "rgba(255, 255, 255, 0.5)";
        boxShadowStr = "0px 0px 10px"
    }
    else if (isScrolled && darkMode) {
        bgColorStr = "rgba(52, 52, 52, 0.5)";
        boxShadowStr = "0px 0px 10px 0px white"
    }

    return (
        <>
            <ControllerPaneContainer styles={{
                backgroundColor: bgColorStr,
                backdropFilter: isScrolled ? "blur(2px)" : "",
                boxShadow: boxShadowStr,
                transition: "background-color 0.2s ease, backdrop-filter 0.2s ease, box-shadow 0.2s ease"
                }}>
                <div style={{textAlign: 'center'}}>
                    {" "}
                    <EventInput className={darkMode ? "EventInput dark" : "EventInput light"}
                    disabled={disabled} value={locationName} placeholder="Location" onChange={handleSearch}/>
                    {" "}
                    <EventButton className={darkMode ? "EventButton dark" : "EventButton light"}
                    text={isShowRecentsDrop ? "Hide Recents" : "Show Recents"} disabled={disabled} 
                    onClick={() => setisShowRecentsDrop(!isShowRecentsDrop)}/>
                    <ul className="locations">
                        {locationList.length == 0 ? "" : locationList.map((element, index) => (
                            <li style={darkMode ? darkModeStyle : lightModeStyle} 
                            key={index} className="locations" onClick={() => {
                            onHandleFetch(element.lon, element.lat);
                            setLocationCoords(element); 
                            setLocationList([]);
                            checkRecentsLength(recents, element)
                            }}>
                                {element.state ? element.name + ", " + element.state + ", " + element.country : 
                                element.name + ", " + element.country}
                            </li>
                        ))}
                    </ul>
                    <span style={{color: darkMode ? "white" : "black"}}>Units:</span> 
                    {" "}
                    <select style={darkMode ? darkModeStyle : lightModeStyle}
                    id="unit" value={String(units)} onChange={() => {onSetUnits(Boolean(!units))}} disabled={disabled}>
                        <option value={"true"}>Imperial</option>
                        <option value={"false"}>Metric</option>
                    </select>
                    {" "}
                    <EventButton className={darkMode ? "EventButton dark" : "EventButton light"}
                    text="Update Weather Information" disabled={disabled} 
                    onClick={() => onHandleFetch(locationCoords.lon, locationCoords.lat)} />
                    {" "}
                    <EventButton className={darkMode ? "EventButton dark" : "EventButton light"}
                    text="Use Current Location" disabled={disabled} 
                    onClick={() => onHandleFetch(locationCoords.lon, locationCoords.lat, true)} />
                    <br />
                    <ul className={isShowRecentsDrop ? "recents show" : "recents hide"}>
                        {recents.map((element, index) => (
                            <li style={darkMode ? darkModeStyle : lightModeStyle}
                            key={index} className={isShowRecentsDrop ? "recents show" : "recents hide"} onClick={() => {
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
