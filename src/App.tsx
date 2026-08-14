/* eslint-disable @typescript-eslint/no-unused-vars */
 import './styles.css'

import { MainPane, EventButton, InfoPaneContainer, 
  ExtraInfoPaneContainer, InfoPane, TimeDate, Temperature, Humidity, Weather } from './Components.tsx';
import { getLongitude, getLatitude } from './functions.tsx';

export default function App() {

  return (
    <>
      <MainPane> 
        <InfoPaneContainer>
          <InfoPane name="Time">
            <TimeDate />
          </InfoPane>
          <InfoPane name='Weather'>
            <Weather />
          </InfoPane>
          <InfoPane name='Temperature'>
            <Temperature />
          </InfoPane>
        </InfoPaneContainer>
        <ExtraInfoPaneContainer>
          <InfoPane name="Wind">
            <p>speed degree gust</p>
          </InfoPane>
          <InfoPane name="Visibility">
            <p>Visibility meter</p>
          </InfoPane>
          <InfoPane name="Sun">
            <p>sunrise, sunset</p>
          </InfoPane>
          <InfoPane name="Humidity">
            <Humidity />
          </InfoPane>
        </ExtraInfoPaneContainer>
      </MainPane>
    </>
  );
}
