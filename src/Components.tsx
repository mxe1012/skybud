/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

export function MainPane({children}) {
    return <div className="MainPane">{children}</div>;
}

export function InfoPaneContainer({children}) {
    return <div className="InfoPaneContainer">{children}</div>;
}

export function InfoPane({name="", children}) {
    return (
        <>
            <span className="InfoPane">
            <p>{name}</p>
                {children}
            </span>
        </>
    );
}

export function ExtraInfoPaneContainer({children}) {
    return (
        <div style={{textAlign: 'center'}}>
            <h1 style={{textAlign: "center", fontFamily: "comfortaa"}}>More Information</h1>
            <div className="ExtraInfoPaneContainer">
                {children}
            </div>
        </div>
    );
}

export function TimeDate() {
    const time = new Date();

    return (
    <div className="TimeDate">
      <h1>{time.toLocaleTimeString()}</h1>
      <h2>{time.toLocaleDateString()}</h2>
    </div>
  );
}

export function EventButton({text="", onClick}) {
    return <button onClick={onClick}>{text}</button>
}
