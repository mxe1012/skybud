/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

// type MainProps = {
//   children: React.ReactNode;
// };
// export const MainPane: React.FC<MainProps> = ({children}) => <div className="MainPane">{children}</div>


export function MainPane({children}) {
    return <div>{children}</div>;
}

export function Heading() {
    return <h1 style={{textAlign: "center"}}>Weather</h1>
}

export function InfoPaneContainer({children}) {
    return <div className="InfoPaneContainer">{children}</div>;
}

export function InfoPane({children}) {
    return (
        <div className="TimeDatePane">
            {children}
        </div>
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
