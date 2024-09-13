import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store/store';
import HistoryWeatherPresentation from './HistoryWeatherPresentation';
import {HistoryScreenRouteProp} from '../../utils/types';
import {fetchHistoryWeather} from '../../features/weather/weatherSlice';

interface HistoryWeatherScreenProps {
  route: HistoryScreenRouteProp;
}

const HistoryWeatherContainer: React.FC<HistoryWeatherScreenProps> = ({
  route,
}) => {
  const {location} = route.params || {};

  // Use useSelector to get state from the Redux store
  const {history, loading, error} = useSelector(
    (state: RootState) => state.weather,
  );
  const dispatch = useDispatch<AppDispatch>();

  const fetchHistory = (selectedStartDate: string, selectedEndDate: string) => {
    if (selectedStartDate && selectedEndDate) {
      dispatch(
        fetchHistoryWeather({
          lat: 37.7749,
          lon: -122.4194,
          startDate: selectedStartDate,
          endDate: selectedEndDate,
        }),
      );
    } else {
      console.error('Dates Invalid or Dates not set');
    }
  };

  return (
    <HistoryWeatherPresentation
      historicalData={history}
      loading={loading}
      error={error}
      onPressFetchHistory={fetchHistory}
    />
  );
};

export default HistoryWeatherContainer;
