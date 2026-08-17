/* eslint-disable @typescript-eslint/no-unused-vars */
 import './styles.css'

import { MainPane,
  Clock,
  EventInput,
  EventButton,
  ControllerPane,
  InfoPaneContainer,  
  WeatherInfoPaneContainer, 
  ExtraInfoPaneContainer, 
  InfoPane, 
  Temperature, 
  Humidity, 
  Weather } from './Components.tsx';
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
        <InfoPaneContainer>
          <WeatherInfoPaneContainer>
            <InfoPane name='Weather'>
              <Weather />
            </InfoPane>
            <InfoPane name='Temperature'>
              <Temperature />
            </InfoPane>
          </WeatherInfoPaneContainer>
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
        </InfoPaneContainer>
        <br />
        <ControllerPane>
          <EventButton text="Update" onClick={undefined}/>
        </ControllerPane>
      </MainPane>
    </>
  );
}
