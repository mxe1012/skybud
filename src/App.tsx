import './styles/styles.css'
import './styles/snackbar.css'
import './styles/history.css'
import './styles/gauges.css'
import './styles/class.css'
import './styles/id.css'

import { useState } from 'react'

import { MainPane } from './ui/Containers.tsx';

import { darkModeStyleBackground, lightModeStyleBackground } from './utils/helpers.ts'

import Dashboard from './ui/Dashboard.tsx';

export default function App() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <div style={ isDarkMode ? darkModeStyleBackground : lightModeStyleBackground} id='bg'>
            <MainPane>
                <Dashboard darkMode={isDarkMode}/>
            </MainPane>
            <button id="darkModeBtn" onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? "🌕" : "☀️"}
            </button>
        </div>
    );
}
