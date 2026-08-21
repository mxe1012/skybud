import './styles/styles.css'

import { MainPane, Clock } from './ui/Components.tsx';

import Dashboard from './ui/Dashboard.tsx';
import Forecast from './ui/Forecast.tsx';

export default function App() {

  return (
    <>
      <MainPane>
        <Clock /> 
        <Dashboard />
        <br />
        <Forecast />
      </MainPane>
    </>
  );
}
