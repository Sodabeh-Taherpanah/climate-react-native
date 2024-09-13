// Forecast.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';

import AnimatedHeader from './AnimatedHeader';
import ForecastList from './ForecastList';
import {useAnimatedHeader} from '../../../hooks/useAnimatedHeader';
import {ForecastData} from '../../../features/weather/weatherTypes';

interface ForecastProps {
  forecastData: ForecastData | null;
}

const Forecast: React.FC<ForecastProps> = ({forecastData}) => {
  const {scrollY, headerHeight, headerOpacity} = useAnimatedHeader();

  return (
    <View style={styles.container}>
      <AnimatedHeader
        headerHeight={headerHeight}
        headerOpacity={headerOpacity}
        cityName={forecastData?.city_name}
        countryCode={forecastData?.country_code}
      />
      <ForecastList data={forecastData?.data || null} scrollY={scrollY} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 5,
    paddingBottom: 30,
    backgroundColor: '#0B2F7C',
  },
});

export default Forecast;
