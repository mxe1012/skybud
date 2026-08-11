/* eslint-disable @typescript-eslint/no-unused-vars */
import './styles.css'

import { MainPane, TimeDate, TimeDatePane } from './Components';

export default function App() {

  return (
    <>
      <MainPane>
        <TimeDatePane>
          <TimeDate />
          </TimeDatePane>
      </MainPane>
    </>
  );
}
