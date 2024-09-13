import React from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';

import {Snackbar} from 'react-native-paper';

import EmptyDataComponent from '../../components/emptyDataComponent';
import CalendarModal from '../../components/calender/calenderModal';
import HistoricalWeatherCard from './components/HistoricalWeatherCard';
import DateSelectionComponent from './components/DateSelectionComponent';

interface HistoricalWeatherPresentationProps {
  historicalData: any;
  loading: boolean;
  error: string | null;
  onPressFetchHistory: (startDate: string, endDate: string) => void;
}

const HistoryWeatherPresentation: React.FC<
  HistoricalWeatherPresentationProps
> = ({historicalData, loading, error, onPressFetchHistory}) => {
  return (
    <View style={styles.container}>
      {error && (
        <Snackbar visible={!!error} onDismiss={() => {}}>
          {error}
        </Snackbar>
      )}
      <DateSelectionComponent onPressFetchHistory={onPressFetchHistory} />
      <CalendarModal />
      {!historicalData && (
        <EmptyDataComponent message="Set dates to see weather history" />
      )}
      {loading && (
        <ActivityIndicator animating={true} size="large" color="#00796b" />
      )}
      {!loading && historicalData && (
        <FlatList
          data={historicalData}
          renderItem={({item}) => <HistoricalWeatherCard item={item} />}
          keyExtractor={item => item.datetime}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 16,
    backgroundColor: '#0B2F7C',
  },
});

export default HistoryWeatherPresentation;
