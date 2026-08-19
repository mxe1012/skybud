import './styles/styles.css'

import { MainPane,
  Clock,
  EventInput,
  ControllerPaneContainer,
  } from './ui/Components.tsx';

import Dashboard from './ui/Dashboard.tsx';
import Forecast from './ui/Forecast.tsx';

export default function App() {

  return (
    <>
      <MainPane>
        <Clock /> 
        <ControllerPaneContainer>
          <EventInput placeholder="Location" onChange={undefined}/>
        </ControllerPaneContainer>
        <Dashboard />
        <br />
        <Forecast />
      </MainPane>
    </>
  );
}
