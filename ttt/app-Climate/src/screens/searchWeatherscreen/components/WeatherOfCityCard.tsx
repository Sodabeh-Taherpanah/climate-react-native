import React from 'react';
import {Card, Title, Text} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {WeatherData} from '../../../features/weather/weatherTypes';
import {formatDate, getWeatherIcon} from '../../../utils/functionHandlers';

interface WeatherOfCityCardProps {
  weatherData: WeatherData;
}

const WeatherOfCityCard: React.FC<WeatherOfCityCardProps> = ({weatherData}) => {
  return (
    <Card style={styles.weatherCard}>
      <Card.Content>
        <View style={styles.cardRow}>
          <Title style={styles.cityText}>{weatherData.city_name}</Title>
          <Title style={styles.weatherDesc}>
            {weatherData.weather.description}
          </Title>
          <Icon
            name={getWeatherIcon(weatherData.weather.description)}
            size={30}
          />
        </View>
        <View style={styles.cardRow}>
          <Title style={styles.dateText}>
            {formatDate(weatherData.datetime)}
          </Title>
          <Text style={styles.weatherText}>{weatherData.temp}°C</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  weatherCard: {
    marginBottom: 36,
    marginTop: 36,
    marginHorizontal: 36,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  cityText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2853af',
  },
  weatherDesc: {
    fontSize: 16,
    color: '#646464',
  },
  weatherText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2853af',
  },
});

export default WeatherOfCityCard;
