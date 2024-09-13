import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Switch} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {toggleUnit} from '../../../features/temperature/temperatureSlice';
import {RootState} from '../../../store/store';

const TemperatureUnit: React.FC = () => {
  const dispatch = useDispatch();
  const unit = useSelector((state: RootState) => state.temperature.unit);

  const toggleTemperatureFormat = () => {
    dispatch(toggleUnit());
  };

  return (
    <View style={styles.unitSwitcher}>
      <Switch value={unit === 'C'} onValueChange={toggleTemperatureFormat} />
      <Text style={styles.unitText}>
        {unit === 'C' ? 'Celsius' : 'Fahrenheit'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  unitSwitcher: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  unitText: {
    color: 'white',
  },
});

export default TemperatureUnit;
