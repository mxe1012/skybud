import './styles/styles.css'
import './styles/snackbar.css'
import './styles/history.css'

import { MainPane } from './ui/Containers.tsx';

import Dashboard from './ui/Dashboard.tsx';

export default function App() {

    return (
    <>
        <MainPane>
            <Dashboard />
        </MainPane>
    </>
    );
}
