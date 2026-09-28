import {ForecastInfoContainer, ForecastInfoPane} from '../Containers.tsx';

import ForecastItem from './forecast_components/ForecastItem.tsx';

import type { ForecastProps } from '../../utils/types.ts';
import SkeletonForecast from '../skeletons/SkeletonForecast.tsx';

export default function Forecast({forecastList, units, darkMode, isLoaded}: ForecastProps) {

    return (
        <>
            <SkeletonForecast isLoaded={isLoaded} darkMode={darkMode}>
            <h1 style={{color: darkMode ? 'whitesmoke' : 'black', textAlign: 'center'}}>Forecast</h1>
            <ForecastInfoContainer className={darkMode ? 'ForecastInfoContainer dark' : 'ForecastInfoContainer light'}>
                {forecastList.map((element) => (
                <li key={element.dt} className="forecast">
                    <ForecastInfoPane className={darkMode ? 'ForecastInfoPane dark' : 'ForecastInfoPane light'}>
                        <ForecastItem
                            forecast={element}
                            units={units}
                        />
                    </ForecastInfoPane>
                </li>
            ))}
            </ForecastInfoContainer>
            </SkeletonForecast>
        </>
    );
}
