import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {convertTemperatureFormat} from '../../utils/functionHandlers';
import CurrentWeather from '../../components/CurrentWeather';
import TemperatureUnit from './components/TemperatureUnit';
import HistoryActionButton from './components/HistoryActionButton';
import ForecastActionButton from './components/ForecastActionButton';
import NotificationBox from './components/NotificationBox';
import {WeatherData} from '../../features/weather/weatherTypes';

interface WeatherPresentationProps {
  currentWeather: WeatherData | null;
  onGotoForecast: () => void;
  onGoToHistory: () => void;
  onResetNotification: () => void;
  onGetLocation: () => void;
  notification: string; // Receive notification here
}

const WeatherHomePresentation: React.FC<WeatherPresentationProps> = ({
  currentWeather,
  onGoToHistory,
  onGotoForecast,
  onResetNotification,
  onGetLocation,
  notification,
}) => {
  if (!currentWeather) {
    return <Text style={styles.noDataText}>No weather data available</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TemperatureUnit />
        <HistoryActionButton onGoToHistory={onGoToHistory} />
      </View>
      {currentWeather && (
        <CurrentWeather
          city={currentWeather.city_name}
          temp={convertTemperatureFormat(currentWeather.temp, 'C')}
          description={currentWeather.weather.description}
          datetime={currentWeather.datetime}
        />
      )}
      <View style={styles.bottomView}>
        <Pressable style={styles.refreshButton} onPress={onGetLocation}>
          <Icon name="refresh" size={30} color="#a2a2a2" />
        </Pressable>
        <ForecastActionButton onGotoForecast={onGotoForecast} />
        {notification && (
          <NotificationBox
            notification={notification}
            onResetNotification={onResetNotification}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0B2F7C',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    gap: 20,
  },
  refreshButton: {
    alignSelf: 'center',
  },
  noDataText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default WeatherHomePresentation;
