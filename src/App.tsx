import './styles/styles.css'

import { MainPane,
  Clock,
  EventInput,
  ControllerPaneContainer,
  } from './ui/Components.tsx';

import Dashboard from './ui/Dashboard.tsx';

export default function App() {

  return (
    <>
      <MainPane>
        <Clock /> 
        <ControllerPaneContainer>
          <EventInput placeholder="Location" onChange={undefined}/>
        </ControllerPaneContainer>
        <Dashboard />
      </MainPane>
    </>
  );
}
