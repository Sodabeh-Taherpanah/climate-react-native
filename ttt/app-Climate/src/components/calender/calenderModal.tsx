import React from 'react';
import {View, Modal} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import CalendarContent from './CalendarContent';
import {RootState, AppDispatch} from '../../store/store';
import {
  closeModal,
  setStartDate,
  setEndDate,
} from '../../features/calendar/calendarSlice';

type calenderProp = {};

const CalendarModal = ({}: calenderProp) => {
  const dispatch: AppDispatch = useDispatch();
  const {modalType, selectedStartDate, selectedEndDate} = useSelector(
    (state: RootState) => state.calendar,
  );

  const handleDateSelect = (date: string) => {
    if (modalType === 'Start Date') {
      dispatch(setStartDate(date));
    } else if (modalType === 'End Date') {
      dispatch(setEndDate(date));
    }
    dispatch(closeModal());
  };

  const handleClose = () => dispatch(closeModal());

  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={!!modalType}
        onRequestClose={handleClose}>
        <CalendarContent
          selectedDay={
            modalType === 'Start Date' ? selectedStartDate : selectedEndDate
          }
          onClose={handleClose}
          onSelectDate={handleDateSelect}
        />
      </Modal>
    </View>
  );
};

export default CalendarModal;
