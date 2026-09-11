import './styles/styles.css'
import './styles/snackbar.css'
import './styles/recents.css'
import './styles/favorites.css'
import './styles/gauges.css'
import './styles/class.css'
import './styles/id.css'
import './styles/media.css'

import { useEffect, useState } from 'react'

import { MainPane } from './ui/Containers.tsx';

import { darkModeStyleBackground, lightModeStyleBackground } from './utils/helpers.ts'

import Dashboard from './ui/Dashboard.tsx';
import SnackbarProvider from './ui/SnackbarContext.tsx'

export default function App() {

    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        const stored = localStorage.getItem("isDarkMode");
        return stored === "true";
    });

    useEffect(() => {
        localStorage.setItem("isDarkMode", String(isDarkMode));
    }, [isDarkMode]);

    return (
        <div style={ isDarkMode ? darkModeStyleBackground : lightModeStyleBackground} id='bg'>
            <MainPane>
                <SnackbarProvider>
                    <Dashboard darkMode={isDarkMode}/>
                </SnackbarProvider>
            </MainPane>
            <button id="darkModeBtn" onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? "🌕" : "☀️"}
            </button>
        </div>
    );
}
