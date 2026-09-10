import { EventButton } from "../Containers"

import { useState } from "react";

export default function DataController({darkMode}) {

    const [notice, setNotice] = useState("");
    const [showSnackbar, setShowSnackbar] = useState(false);

    function clearRecentsSnackbar(index: number) {
        const snackbars = ["All Site Data Cleared", "Recents Cleared", "Favorites Cleared"]

        setShowSnackbar(true)
        setNotice(snackbars[index])
        setTimeout(() => {
            setShowSnackbar(false)
        }, 2000)
    }

    return (
        <>  
            <div id="snackbar" className={showSnackbar ? "show" : ""}>{notice}</div>
            <div className="DataController">
                <EventButton className={darkMode ? "EventButton dark" : "EventButton light"} text="Clear All Site Data" 
                disabled={false} onClick={() => {localStorage.clear(); clearRecentsSnackbar(0)}}/>
                <EventButton className={darkMode ? "EventButton dark" : "EventButton light"} text="Clear Recents" 
                disabled={false} onClick={() => {localStorage.removeItem("recents"); clearRecentsSnackbar(1)}}/>
                <EventButton className={darkMode ? "EventButton dark" : "EventButton light"} text="Clear Favorites" 
                disabled={false} onClick={() => {localStorage.removeItem("favorites"); clearRecentsSnackbar(2)}}/>
            </div>
        </>
    )
}
