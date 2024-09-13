import {configureStore} from '@reduxjs/toolkit';

import weatherReducer from '../features/weather/weatherSlice';
import temperatureReducer from '../features/temperature/temperatureSlice';
import calendarReducer from '../features/calendar/calendarSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    temperature: temperatureReducer,
    calendar: calendarReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
