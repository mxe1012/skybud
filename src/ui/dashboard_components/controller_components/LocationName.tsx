import type { LocationNameProps } from "../../../utils/types";
import { FavoriteButton } from "../../Containers";

export default function LocationName({currentLocationName, disabled, isFavorited, onHandleFavorites, darkMode, isLoaded}: LocationNameProps) {
    
    if(!isLoaded) {
        return (
            <>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div className={ darkMode ? "skeleton dark skeleton-name" : "skeleton light skeleton-name"}></div>
                </div>
            </>
        )
    }
    return (
        <>
            <h1 style={{color: darkMode ? 'whitesmoke' : 'black', textAlign: 'center'}}>
                <img style={{filter: darkMode ? "invert(1)" : ""}} src="/assets/icons/location.webp" width={25} height={35} alt="Location"/>
                {" "}
                <b>{currentLocationName}</b>
                {" "} 
                <FavoriteButton className="favoriteBtn" 
                btnIconSrc=
                {isFavorited ? "/assets/favorites/heart_filled.webp" : (darkMode ? "/assets/favorites/heart_empty_dark.webp" : "/assets/favorites/heart_empty.webp")}
                disabled={disabled}
                onClick={onHandleFavorites}/>
            </h1>
        </>
    )
}
