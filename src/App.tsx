 import './styles.css'

import { MainPane, EventButton, InfoPaneContainer, 
  ExtraInfoPaneContainer, InfoPane, TimeDate, Temperature } from './Components.tsx';
import { getLongitude, getLatitude } from './functions.tsx';

export default function App() {

  return (
    <>
      <MainPane> 
        <EventButton text="Get Location" onClick={() => {getLongitude(); getLatitude()}} />
        <br />
        <br />
        <InfoPaneContainer>
          <InfoPane name="Time">
            <TimeDate />
          </InfoPane>
          <InfoPane name='Current Weather'>
            <p>id, main, icon, description</p>
          </InfoPane>
          <InfoPane name='Temperature'>
            <Temperature />
          </InfoPane>
        </InfoPaneContainer>
        <br />
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
            <p>Humidity</p>
          </InfoPane>
        </ExtraInfoPaneContainer>
      </MainPane>
    </>
  );
}
