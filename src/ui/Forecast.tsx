import {ForecastInfoContainer, ForecastInfoPane, ForecastItem} from './Components.tsx';

export default function Forecast({forecastList}) {

    return (
        <>
            <ForecastInfoContainer>
                {forecastList.map((forecast) => (
                <li key={forecast.dt}>
                    <ForecastInfoPane>
                        <ForecastItem
                            dt={forecast.dt}
                            weather={{ main: forecast.main, icon: forecast.icon }}
                            temperature={{ temp_max: forecast.temp_max, temp_min: forecast.temp_min }}
                    />
                    </ForecastInfoPane>
                </li>
                )
            )}
            </ForecastInfoContainer>
        </>
    );

}
