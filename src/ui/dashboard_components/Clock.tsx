
export default function Clock({darkMode}) {

    const time = new Date();

    return (
        <div className="Clock">
            <span 
            style={{backgroundColor: darkMode && 'black', boxShadow: darkMode && '0px 0px 10px 0px white',transform: "scale(1)"}} className="ClockTimeDatePane">
                <div className="TimeDate">
                    <h1 style={{color: darkMode && 'white'}}>{time.toLocaleTimeString()}</h1>
                    <h2 style={{color: darkMode && 'white'}}>{time.toLocaleDateString()}</h2>
                </div>
            </span>
        </div>
    );
}
