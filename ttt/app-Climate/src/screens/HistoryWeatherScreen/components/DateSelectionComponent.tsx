import React from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {openModal} from '../../../features/calendar/calendarSlice';
import {AppDispatch, RootState} from '../../../store/store';
import {CompareDates} from '../../../utils/functionHandlers';

interface DateSelectionComponentProps {
  onPressFetchHistory: (startDate: string, endDate: string) => void;
}

const DateSelectionComponent: React.FC<DateSelectionComponentProps> = ({
  onPressFetchHistory,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const {selectedStartDate, selectedEndDate} = useSelector(
    (state: RootState) => state.calendar,
  );

  const handleOpenStartDateModal = () => dispatch(openModal('Start Date'));
  const handleOpenEndDateModal = () => dispatch(openModal('End Date'));

  return (
    <View style={styles.dateRow}>
      <View style={{flex: 1, marginLeft: 16}}>
        <Text>Start Date</Text>
        <TextInput
          style={styles.textInput}
          value={selectedStartDate ?? undefined}
          placeholder="Start Date"
          editable={false}
          onPressIn={handleOpenStartDateModal}
        />
      </View>
      <View style={{flex: 1}}>
        <Text>End Date</Text>
        <TextInput
          style={styles.textInput}
          value={selectedEndDate ?? undefined}
          placeholder="End Date"
          editable={false}
          onPressIn={handleOpenEndDateModal}
        />
      </View>
      <View style={styles.button}>
        <Pressable
          onPress={() => {
            if (selectedEndDate && selectedStartDate) {
              if (CompareDates(selectedStartDate, selectedEndDate))
                onPressFetchHistory(selectedStartDate, selectedEndDate);
              else Alert.alert('End date must be after Start date!');
            } else Alert.alert('Set Start and End date');
          }}>
          <Text>OK</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 0.5,
    borderColor: '#a9a9a9',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignSelf: 'center',
    marginBottom: 8,
    backgroundColor: 'white',
    paddingVertical: 16,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    gap: 20,
  },
  button: {
    borderRadius: 5,
    paddingVertical: 11,
    paddingHorizontal: 20,
    backgroundColor: '#e2af3f',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    flex: 0.5,
  },
});

export default DateSelectionComponent;
