import {ForecastInfoContainer, ForecastInfoPane} from './Containers.tsx';

import ForecastItem from './components/ForecastItem.tsx';

export default function Forecast({forecastList, units}) {

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
