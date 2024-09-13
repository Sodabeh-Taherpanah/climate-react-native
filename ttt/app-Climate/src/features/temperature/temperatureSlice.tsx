import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  unit: 'C', // Default is Celsius
};

const temperatureSlice = createSlice({
  name: 'temperature',
  initialState,
  reducers: {
    toggleUnit: state => {
      state.unit = state.unit === 'C' ? 'F' : 'C'; // Toggle between Celsius and Fahrenheit
    },
  },
});

export const {toggleUnit} = temperatureSlice.actions;

export default temperatureSlice.reducer;
