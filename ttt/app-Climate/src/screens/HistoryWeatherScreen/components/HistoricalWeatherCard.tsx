import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface HistoricalWeatherCardProps {
  item: any;
}

const HistoricalWeatherCard: React.FC<HistoricalWeatherCardProps> = ({
  item,
}) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title style={styles.title}>{item.datetime}</Title>
        <View style={styles.row}>
          <View style={styles.cardItem}>
            <Icon name="thermometer" size={24} color="#00796b" />
            <Paragraph style={styles.paragraph}>
              Temperature: {item.temp}°C
            </Paragraph>
          </View>
          <View style={styles.cardItem}>
            <Icon name="weather-windy" size={24} color="#8e24aa" />
            <Paragraph style={styles.paragraph}>
              Wind Speed: {item.wind_spd} km/h
            </Paragraph>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cardItem}>
            <Icon name="thermometer" size={24} color="#a2a2a2" />
            <Paragraph style={styles.paragraph}>
              Min Temp: {item.min_temp}°C
            </Paragraph>
          </View>
          <View style={styles.cardItem}>
            <Icon name="thermometer" size={24} color="#5a5a5a" />
            <Paragraph style={styles.paragraph}>
              Max Temp: {item.max_temp}°C
            </Paragraph>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 4,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00796b',
    marginBottom: 8,
    alignSelf: 'center',
  },
  paragraph: {
    fontSize: 12,
    color: '#424242',
    marginLeft: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
  },
});

export default HistoricalWeatherCard;
