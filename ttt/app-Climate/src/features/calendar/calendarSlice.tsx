import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CalendarState {
  modalType: 'Start Date' | 'End Date' | null;
  selectedStartDate: string | null;
  selectedEndDate: string | null;
}

const initialState: CalendarState = {
  modalType: null,
  selectedStartDate: null,
  selectedEndDate: null,
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<'Start Date' | 'End Date'>) {
      state.modalType = action.payload;
    },
    closeModal(state) {
      state.modalType = null;
    },
    setStartDate(state, action: PayloadAction<string>) {
      state.selectedStartDate = action.payload;
    },
    setEndDate(state, action: PayloadAction<string>) {
      state.selectedEndDate = action.payload;
    },
  },
});

export const {openModal, closeModal, setStartDate, setEndDate} =
  calendarSlice.actions;
export default calendarSlice.reducer;
