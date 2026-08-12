/* eslint-disable @typescript-eslint/no-unused-vars */
import './styles.css'

import { MainPane, InfoPaneContainer, ExtraInfoPaneContainer, InfoPane, TimeDate } from './Components';

export default function App() {

  return (
    <>
      <MainPane> 
        <InfoPaneContainer>
          <InfoPane name="Time">
            <TimeDate />
          </InfoPane>
          <InfoPane name='Current Weather'>
            <p>id, main, icon, description</p>
          </InfoPane>
          <InfoPane name='Temperature'>
            <p>temp, feels like, humidity</p>
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
          <InfoPane name="More">
            <p>More Information</p>
          </InfoPane>
        </ExtraInfoPaneContainer>
      </MainPane>
    </>
  );
}
