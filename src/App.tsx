import './styles/styles.css'
import './styles/snackbar.css'
import './styles/history.css'
import './styles/gauges.css'
import './styles/class.css'

import { useState } from 'react'

import { MainPane, EventButton } from './ui/Containers.tsx';

import Dashboard from './ui/Dashboard.tsx';

export default function App() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <body style={{
            background: isDarkMode ? 
            "radial-gradient(circle,rgba(0, 45, 227, 1) 0%, rgba(3, 11, 89, 1) 50%, rgba(0, 61, 158, 1) 100%)"
        :   "radial-gradient(circle,rgba(255, 255, 255, 1) 0%, rgba(65, 196, 240, 1) 50%, rgba(154, 216, 252, 1) 100%)"
        }} className='body'>
            <EventButton text="Toggle dark mode" disabled={false} onClick={() => setIsDarkMode(!isDarkMode)}/>
            <MainPane>
                <Dashboard darkMode={isDarkMode}/>
            </MainPane>
        </body>
    );
}
