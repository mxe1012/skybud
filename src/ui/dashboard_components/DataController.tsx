import { EventButton } from "../Containers";

import { useSnackbar } from "../../hooks/SnackbarContext";

export default function DataController({darkMode}) {

    const { showSnackbar } = useSnackbar();

    return (
        <>  
            <div className="DataController">
                <EventButton className={darkMode ? "EventButton dark" : "EventButton light"} text="Clear All Site Data" 
                disabled={false} 
                onClick={() => {localStorage.clear(); showSnackbar("Site Data Cleared"); window.location.reload()}}/>
                <EventButton className={darkMode ? "EventButton dark" : "EventButton light"} text="Clear Recents" 
                disabled={false} 
                onClick={() => {localStorage.removeItem("recents"); showSnackbar("Recents Cleared"); window.location.reload()}}/>
                <EventButton className={darkMode ? "EventButton dark" : "EventButton light"} text="Clear Favorites" 
                disabled={false} 
                onClick={() => {localStorage.removeItem("favorites"); showSnackbar("Favorites Cleared"); window.location.reload()}}/>
            </div>
        </>
    )
}
