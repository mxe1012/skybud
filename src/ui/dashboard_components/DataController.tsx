import { EventButton } from "../Containers";

import { useSnackbar } from "../SnackbarContext";

export default function DataController({darkMode}) {

    const { showSnackbar } = useSnackbar();

    return (
        <>  
            <div className="DataController">
                <EventButton className={darkMode ? "EventButton dark" : "EventButton light"} text="Clear All Site Data" 
                disabled={false} onClick={() => {localStorage.clear(); showSnackbar("Site Data Cleared")}}/>
                <EventButton className={darkMode ? "EventButton dark" : "EventButton light"} text="Clear Recents" 
                disabled={false} onClick={() => {localStorage.removeItem("recents"); showSnackbar("Recents Cleared")}}/>
                <EventButton className={darkMode ? "EventButton dark" : "EventButton light"} text="Clear Favorites" 
                disabled={false} onClick={() => {localStorage.removeItem("favorites"); showSnackbar("Favorites Cleared")}}/>
            </div>
        </>
    )
}
