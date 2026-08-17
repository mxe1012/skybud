import './styles.css'

import { MainPane,
  Clock,
  EventInput,
  ControllerPane,
  } from './ui/Components.tsx';

import Dashboard from './ui/Dashboard.tsx';
// import { getLongitude, getLatitude } from './utils/functions.tsx';

export default function App() {

  return (
    <>
      <MainPane>
        <Clock /> 
        <ControllerPane>
          <EventInput placeholder="Location" onChange={undefined}/>
        </ControllerPane>
        <br />
        <Dashboard />
      </MainPane>
    </>
  );
}
