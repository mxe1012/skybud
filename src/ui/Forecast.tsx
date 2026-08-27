import {ForecastInfoContainer, ForecastInfoPane} from './Containers.tsx';

import ForecastItem from './dashboard_components/ForecastItem.tsx';

import type { ForecastProps } from '../utils/types.tsx';

export default function Forecast({forecastList, units}: ForecastProps) {

    return (
        <>
            <ForecastInfoContainer>
                {forecastList.map((forecast) => (
                <li key={forecast.dt} className="forecast">
                    <ForecastInfoPane>
                        <ForecastItem
                            dt={forecast.dt}
                            weather={{ main: forecast.main, icon: forecast.icon }}
                            temperature={{ temp_max: forecast.temp_max, temp_min: forecast.temp_min }}
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
