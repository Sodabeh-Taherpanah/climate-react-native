import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, List, Title, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getDayOfWeek, getWeatherIcon} from '../../../utils/functionHandlers';
import {ForecastData} from '../../../features/weather/weatherTypes';

interface ForecastListItemProps {
  item: ForecastData['data'][number];
}

const ForecastListItem: React.FC<ForecastListItemProps> = ({item}) => {
  const theme = useTheme();

  return (
    <Card style={[styles.card, {backgroundColor: theme.colors.surface}]}>
      <Card.Content style={styles.cardContent}>
        <Title style={styles.dateText}>{getDayOfWeek(item.datetime)}</Title>
        <Title style={styles.weekDayText}>{item.weather.description}</Title>
      </Card.Content>
      <Card.Content>
        <List.Item
          title={`Wind: ${item.wind_spd} M/S  Humidity: ${item.rh} %`}
          description={`Temperature Min: ${item.min_temp}°C, Max: ${item.max_temp}°C`}
          left={() => (
            <Icon
              name={getWeatherIcon(item?.weather?.description)}
              size={30}
              color={theme.colors.primary}
            />
          )}
        />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 4,
    padding: 0,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2853af',
  },
  weekDayText: {
    fontSize: 16,
    color: '#646464',
  },
});

export default ForecastListItem;
