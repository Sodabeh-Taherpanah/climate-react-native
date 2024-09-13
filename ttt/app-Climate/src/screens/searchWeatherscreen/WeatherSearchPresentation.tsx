import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

import {Text} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {WeatherData} from '../../features/weather/weatherTypes';
import WeatherOfCityCard from './components/WeatherOfCityCard';
import SearchWithCityComponent from './components/SearchWithCityComponent';

interface WeatherSearchPresentationProps {
  location: string;
  weatherData: WeatherData | null;
  error: string | null;
  loading: boolean;
  onLocationChange: (text: string) => void;
  onFetchWeather: () => void;
}

const WeatherSearchPresentation: React.FC<WeatherSearchPresentationProps> = ({
  location,
  weatherData,
  error,
  loading,
  onLocationChange,
  onFetchWeather,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}>
      <Text style={styles.title}>Find the Weather of Your City</Text>

      {/* Search input and button */}
      <SearchWithCityComponent
        location={location}
        onLocationChange={onLocationChange}
        onFetchWeather={onFetchWeather}
      />

      {/* Display error message if any */}
      {error ? <Text style={styles.error}>{error}</Text> : null}

      {/* Display weather data when available */}
      {!loading && weatherData && (
        <WeatherOfCityCard weatherData={weatherData} />
      )}

      {/* Show loading spinner when fetching */}
      {loading && (
        <ActivityIndicator animating={true} size="large" color="#00796b" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B2F7C',
  },
  title: {
    fontSize: 24,
    marginVertical: 36,
    textAlign: 'center',
    color: 'white',
  },
  error: {
    color: 'red',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default WeatherSearchPresentation;
