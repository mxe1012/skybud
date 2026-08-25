import './styles/styles.css'
import './styles/snackbar.css'

import { MainPane, Clock } from './ui/Containers.tsx';

import Dashboard from './ui/Dashboard.tsx';

export default function App() {

    return (
    <>
        <MainPane>
            <Clock /> 
            <Dashboard />
        </MainPane>
    </>
    );
}
