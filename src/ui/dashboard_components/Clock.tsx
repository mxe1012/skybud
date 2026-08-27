
export default function Clock() {

    const time = new Date();
    
    let textColor;
    let bgColor;

    if(time.getHours() >= 19 && time.getHours() <= 23) {
        textColor = 'white';
        bgColor = 'black';
    }
    else {
        textColor = 'black';
        bgColor = 'white';
    }

    return (
        <div className="Clock">
            <span style={{backgroundColor: bgColor, transform: "scale(1)"}} className="ClockTimeDatePane">
                <div className="TimeDate">
                    <h1 style={{color: textColor}}>{time.toLocaleTimeString()}</h1>
                    <h2 style={{color: textColor}}>{time.toLocaleDateString()}</h2>
                </div>
            </span>
        </div>
    );
}