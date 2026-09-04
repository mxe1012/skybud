import {ForecastInfoContainer, ForecastInfoPane} from './Containers.tsx';

import ForecastItem from './dashboard_components/ForecastItem.tsx';

import type { ForecastProps } from '../utils/types.ts';

export default function Forecast({forecastList, units, darkMode}: ForecastProps) {

    return (
        <>
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
                )
            )}
            </ForecastInfoContainer>
        </>
    );

}
