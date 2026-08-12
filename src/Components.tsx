/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

// type MainProps = {
//   children: React.ReactNode;
// };
// export const MainPane: React.FC<MainProps> = ({children}) => <div className="MainPane">{children}</div>


export function MainPane({children}) {
    return <div className="MainPane">{children}</div>;
}

export function Heading() {
    return <h1 style={{textAlign: "center"}}>Weather</h1>
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
    )
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
