// WeatherSearchContainer.tsx
import React, {useState} from 'react';
import {Alert} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import WeatherSearchPresentation from './WeatherSearchPresentation';
import {AppDispatch, RootState} from '../../store/store';
import {fetchWeatherWithCity} from '../../features/weather/weatherSlice';
import {RootStackParamList} from '../../utils/types';

type WeatherSearchContainerNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MainTabs'
>;

const WeatherSearchContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<WeatherSearchContainerNavigationProp>();

  const [city, SetCity] = useState(''); // Store the user's input location

  const {cityWeather, loading, error} = useSelector(
    (state: RootState) => state.weather,
  );

  // Function to fetch weather
  const handleFetchWeather = () => {
    if (!city) {
      Alert.alert('Please add a city name');
      return;
    }
    dispatch(fetchWeatherWithCity(city));
  };

  return (
    <WeatherSearchPresentation
      location={city}
      weatherData={cityWeather}
      error={error}
      loading={loading}
      onLocationChange={SetCity}
      onFetchWeather={handleFetchWeather}
    />
  );
};

export default WeatherSearchContainer;
