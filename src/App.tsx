/* eslint-disable @typescript-eslint/no-unused-vars */
import './styles.css'

import { MainPane, Heading, InfoPaneContainer, InfoPane, TimeDate } from './Components';

export default function App() {

  return (
    <>
      <MainPane> 
        <Heading />
        <InfoPaneContainer>
          <InfoPane name="Time">
            <TimeDate />
          </InfoPane>
        </InfoPaneContainer>
      </MainPane>
    </>
  );
}
