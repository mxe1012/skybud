/* eslint-disable @typescript-eslint/no-unused-vars */
 import './styles.css'

import { MainPane,
  Clock,
  EventInput,
  ControllerPane,
  } from './Components.tsx';

import Dashboard from './Dashboard.tsx';
import { getLongitude, getLatitude } from './functions.tsx';

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
