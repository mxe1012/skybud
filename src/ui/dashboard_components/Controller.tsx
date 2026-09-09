import { ControllerPaneContainer, EventInput, EventButton } from "../Containers";
import { useRef, useState, useEffect } from "react";

import { apiFetchLocations } from "../../utils/data";

import { lightModeStyle, darkModeStyle } from "../../utils/helpers";

import { FavoriteButton } from "../Containers";

import type { ControllerProps, LocationEntry } from "../../utils/types";
import RecentsList from "../controller_components/RecentsList";
import SearchList from "../controller_components/SearchList";
import FavoritesList from "../controller_components/FavoritesList";

export default function Controller({currentLocationName, units, onSetUnits, disabled, onHandleFetch, darkMode}: ControllerProps) {

    const [currentLocationEntry, setCurrentLocationEntry] = useState<LocationEntry>({
        name: "Globe",
        country: "Earth",
        state: "",
        lat: 0,
        lon: 0
    });

    const [locationName, setLocationName] = useState("");
    const [locationList, setLocationList] = useState<LocationEntry[]>([]);
    const [locationCoords, setLocationCoords] = useState({
        lon: 0,
        lat: 0
    });

    const [recents, setRecents] = useState<LocationEntry[]>([]);
    const [isShowRecentsDrop, setisShowRecentsDrop] = useState(false);

    const [favorites, setFavorites] = useState<LocationEntry[]>(
        localStorage.getItem("favorites") != null ? JSON.parse(String(localStorage.getItem("favorites"))) : []
    );
    const [isShowFavoritesDrop, setIsShowFavoritesDrop] = useState(false)

    const [isScrolled, setIsScrolled] = useState(false);

    const [notice, setNotice] = useState("");
    const [showSnackbar, setShowSnackbar] = useState(false);

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

        } catch (e) {
                console.error(e);
        }
    }

    function checkRecentsLength(element: LocationEntry) {
        const updated = recents.length >= 5 ? recents.slice(1) : recents;
        setRecents([
            ...updated, 
            element
        ]);
    }
    
    function handleFavorites() {
        const isInFavorites = 
        favorites.some((element) => currentLocationEntry.lat == element.lat && currentLocationEntry.lon == element.lon);

        if (isInFavorites == false) {
            setFavorites([
                ...favorites,
                currentLocationEntry
            ]);

            setShowSnackbar(true)
            setNotice("Added to favorites")
            setTimeout(() => setShowSnackbar(false), 2000)
        }
        else if(isInFavorites == true) {
            const toggleFavorite = 
            favorites.filter((element) => currentLocationEntry.lat != element.lat && currentLocationEntry.lon != element.lon)
            
            setFavorites(toggleFavorite);

            setShowSnackbar(true)
            setNotice("Removed from favorites")
            setTimeout(() => setShowSnackbar(false), 2000)
        }
    }

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites])
    
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
            <div id="snackbar" className={showSnackbar ? "show" : ""}>{notice}</div>
            <ControllerPaneContainer styles={{
                backgroundColor: bgColorStr,
                backdropFilter: isScrolled ? "blur(2px)" : "",
                boxShadow: boxShadowStr,
                transition: "background-color 0.2s ease, backdrop-filter 0.2s ease, box-shadow 0.2s ease"
            }}>
                <div style={{textAlign: 'center'}}>
                    {" "}
                    <EventInput className={darkMode ? "EventInput dark" : "EventInput light"}
                    disabled={disabled} value={locationName} placeholder="Search Location..." onChange={handleSearch}/>
                    {" "}
                    <EventButton className={darkMode ? "EventButton dark" : "EventButton light"}
                    text={isShowRecentsDrop ? "Hide Recents" : "Show Recents"} disabled={disabled} 
                    onClick={() => {setisShowRecentsDrop(!isShowRecentsDrop); setIsShowFavoritesDrop(false)}}/>
                    {" "}
                    <EventButton className={darkMode ? "EventButton dark" : "EventButton light"} 
                    text={isShowFavoritesDrop ? "Hide Favorites" : "Show Favorites"} disabled={disabled} 
                    onClick={() => {setIsShowFavoritesDrop(!isShowFavoritesDrop); setisShowRecentsDrop(false)}}/>
                    <SearchList locationList={locationList} onLocationCoords={setLocationCoords} onLocationList={setLocationList}
                    onHandleFetch={onHandleFetch} onCurrentLocation={setCurrentLocationEntry} checkRecentsLength={checkRecentsLength} darkMode={darkMode}/>
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
                    <RecentsList recents={recents} visible={isShowRecentsDrop} onLocationCoords={setLocationCoords}
                    onLocationName={setLocationName} onHandleFetch={onHandleFetch} onCurrentLocation={setCurrentLocationEntry}darkMode={darkMode}/>
                    <FavoritesList favorites={favorites} visible={isShowFavoritesDrop} onLocationCoords={setLocationCoords}
                    onLocationName={setLocationName} onHandleFetch={onHandleFetch} onCurrentLocation={setCurrentLocationEntry} darkMode={darkMode}/>
                </div>
            </ControllerPaneContainer>
            <h1 style={{color: darkMode ? 'whitesmoke' : 'black', textAlign: 'center'}}>
                <img style={{filter: darkMode ? "invert(1)" : ""}}src="/assets/icons/location.png" width={25} height={35}/>
                {" "}
                <b>{currentLocationName}</b>
                {" "} 
                <FavoriteButton className="favoriteBtn" 
                btnIconSrc={darkMode ? "/assets/favorites/heart_empty_dark.png" : "/assets/favorites/heart_empty.png"} 
                disabled={disabled}
                onClick={handleFavorites}/>
            </h1>
        </>
    );
}
