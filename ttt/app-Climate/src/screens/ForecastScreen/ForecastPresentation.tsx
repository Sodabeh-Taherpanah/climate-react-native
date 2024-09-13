import React from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';

import Forecast from './components/Forecast';
import {ForecastData} from '../../features/weather/weatherTypes';

interface ForecastPresentationProps {
  forecastData: ForecastData | null;
  loading: boolean;
  error: string | null;
}

const ForecastPresentation: React.FC<ForecastPresentationProps> = ({
  forecastData,
  loading,
  error,
}) => {
  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>{error}</Text>
      </View>
    );
  }

  return <Forecast forecastData={forecastData} />;
};

const styles = StyleSheet.create({
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ForecastPresentation;
