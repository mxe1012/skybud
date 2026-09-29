import './styles/styles.css'
import './styles/controller.css'
import './styles/snackbar.css'
import './styles/recents.css'
import './styles/favorites.css'
import './styles/gauges.css'
import './styles/class.css'
import './styles/id.css'
import './styles/media.css'
import './styles/dc.css'
import './styles/bg.css'
import './styles/skeleton.css'
import './styles/search.css'

import { useEffect, useState } from 'react'

import { MainPane } from './ui/Containers.tsx';

import Dashboard from './ui/Dashboard.tsx';
import SnackbarProvider from './hooks/SnackbarContext.tsx'
import CreditFooter from './CreditFooter.tsx'

export default function App() {

    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        const stored = localStorage.getItem("isDarkMode");
        return stored === "true";
    });

    useEffect(() => {
        localStorage.setItem("isDarkMode", String(isDarkMode));
    }, [isDarkMode]);

    return (
        <div className={isDarkMode ? "bg dark" : "bg light"}>
            <MainPane>
                <SnackbarProvider>
                    <Dashboard darkMode={isDarkMode}/>
                </SnackbarProvider>
            </MainPane>
            <button id="darkModeBtn" onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? "🌕" : "☀️"}
            </button>
            <CreditFooter />
        </div>
    );
}
