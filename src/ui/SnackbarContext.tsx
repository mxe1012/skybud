import { createContext, useState, useRef, useContext } from "react";

import type { ReactNode } from 'react';
import type { SnackbarContextType } from "../utils/types";

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export default function SnackbarProvider({ children }: { children: ReactNode }) {
    const [notice, setNotice] = useState("");
    const [visible, setVisible] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    function showSnackbar(message: string, duration = 2000) {
        // clear any existing timer so a new trigger resets the clock
        // instead of letting a stale timeout hide it early
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        setNotice(message);
        setVisible(true);

        timeoutRef.current = setTimeout(() => {
            setVisible(false);
        }, duration);
    }

    return (
        <SnackbarContext.Provider value={{ showSnackbar }}>
            {children}
            <div id="snackbar" className={visible ? "show" : ""}>{notice}</div>
        </SnackbarContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSnackbar() {
    const context = useContext(SnackbarContext);
    if (!context) {
        throw new Error("useSnackbar must be used within a SnackbarProvider");
    }
    return context;
}
