
export default function DataController() {

    return (
        <>  
            <div className="DataController">
                <button onClick={() => {localStorage.clear()}}>clear all site data</button>
                <button onClick={() => {localStorage.removeItem("recents")}}>clear recents</button>
                <button onClick={() => {localStorage.removeItem("favorites")}}>clear favorites</button>
            </div>
        </>
    )
}
