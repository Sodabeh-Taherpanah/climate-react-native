import React from 'react';
import {FlatList, Animated, StyleSheet} from 'react-native';

import ForecastListItem from './ForecastListItem';
import {ForecastData} from '../../../features/weather/weatherTypes';

interface ForecastListProps {
  data: ForecastData['data'] | null;
  scrollY: Animated.Value;
}

const ForecastList: React.FC<ForecastListProps> = ({data, scrollY}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.datetime}
      renderItem={({item}) => <ForecastListItem item={item} />}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: false,
      })}
      showsVerticalScrollIndicator={false}
      style={styles.flatList}
      contentContainerStyle={styles.flatListContent}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
  flatListContent: {
    paddingTop: 120,
  },
});

export default ForecastList;
