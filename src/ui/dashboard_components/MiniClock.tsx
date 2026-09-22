import { useEffect, useState } from "react"
import type { MiniClockProps } from "../../utils/types";

export default function MiniClock({time, darkMode}: MiniClockProps) {

    const [clock, setClock] = useState(new Date());

    useEffect(() => {

        const id = setInterval(() => {
            setClock(new Date());
        }, 1000)

        return () => clearInterval(id);

    }, [])

    return (
        <>
            <p style={{color: darkMode ? 'white' : 'black', textAlign: 'center'}}>{clock.toLocaleTimeString()}</p>
            <p style={{color: darkMode ? 'white' : 'black', textAlign: 'center'}}>{"Last updated: " + time}</p>
        </>
    )
}
