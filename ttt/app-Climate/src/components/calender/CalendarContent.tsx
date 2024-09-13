import React from 'react';
import {StyleSheet, Text, Pressable, View} from 'react-native';

import {Calendar} from 'react-native-calendars';

interface CalendarContentProps {
  selectedDay: string | null;
  onClose: () => void;
  onSelectDate: (date: string) => void;
}

const CalendarContent: React.FC<CalendarContentProps> = ({
  selectedDay,
  onClose,
  onSelectDate,
}) => {
  const handleDayPress = (day: any) => {
    onSelectDate(day.dateString);
  };
  const themeCalender = {
    backgroundColor: '#ffffff',
    calendarBackground: '#ffffff',
    textSectionTitleColor: '#b6c1cd',
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#00adf5',
    dayTextColor: '#2d4150',
    textDisabledColor: '#d9eeee',
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Calendar
          theme={themeCalender}
          onDayPress={handleDayPress}
          markedDates={{
            [selectedDay || '']: {selected: true, selectedColor: 'blue'},
          }}
        />
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={onClose}>
          <Text style={styles.textStyle}>Close</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CalendarContent;
