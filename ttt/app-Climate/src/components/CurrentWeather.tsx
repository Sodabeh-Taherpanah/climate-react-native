// CurrentWeather.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, Title, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {formatDate, getWeatherIcon} from '../utils/functionHandlers';

interface CurrentWeatherProps {
  temp: string;
  description: string;
  datetime: string;
  city: string;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({
  temp,
  description,
  datetime,
  city,
}) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Card style={[styles.card, {backgroundColor: theme.colors.surface}]}>
        <View style={styles.iconContainer}>
          <Icon name={getWeatherIcon(description)} size={30} color={'white'} />
        </View>
        <Card.Content style={styles.cardContent}>
          <Text style={styles.timeText}>{formatDate(datetime)}</Text>
          <Text style={styles.descriptionText}>{description}</Text>
          <Title style={styles.cityText}>{city}</Title>
          <Text style={styles.tempText}>{temp}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingBottom: 30,
    justifyContent: 'center',
    marginHorizontal: 16,
    flex: 0.6,
  },
  cardContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    borderRadius: 10,
    paddingVertical: 16,
    elevation: 4,
  },
  iconContainer: {
    backgroundColor: '#4a6db2',
    borderRadius: 40,
    width: 60,
    height: 60,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  tempText: {
    fontSize: 16,
    marginTop: 8,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold',
    color: '#0e3e9e',
  },
  timeText: {
    fontSize: 18,
    marginVertical: 16,
  },
  cityText: {
    color: '#a2a2a2',
  },
});

export default CurrentWeather;
