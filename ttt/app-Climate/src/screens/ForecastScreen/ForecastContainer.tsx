import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ForecastPresentation from './ForecastPresentation';
import {ForecastScreenRouteProp} from '../../utils/types';
import {fetch7DayForecast} from '../../features/weather/weatherSlice';
import {AppDispatch, RootState} from '../../store/store';

interface ForecastWeatherScreenProps {
  route: ForecastScreenRouteProp;
}

const ForecastContainer: React.FC<ForecastWeatherScreenProps> = ({route}) => {
  const dispatch = useDispatch<AppDispatch>();

  const {forecast, loading, error} = useSelector(
    (state: RootState) => state.weather,
  );
  const {location} = route.params || {};

  useEffect(() => {
    if (location?.latitude && location?.latitude) {
      dispatch(
        fetch7DayForecast({lat: location?.latitude, lon: location?.longitude}),
      );
    }
  }, [dispatch, location]);

  return (
    <ForecastPresentation
      forecastData={forecast}
      loading={loading}
      error={error}
    />
  );
};

export default ForecastContainer;
