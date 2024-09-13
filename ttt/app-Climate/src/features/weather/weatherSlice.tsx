import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  getCurrentWeather,
  get7DayForecast,
  getHistoryWeather,
  getWeatherWithCity,
} from './weatherAPI';
import {
  ForecastData,
  HistoryData,
  WeatherData,
  WeatherState,
} from './weatherTypes';

// Define async thunks for handling API calls
export const fetchCurrentWeather = createAsyncThunk(
  'weather/fetchCurrentWeather',
  async ({lat, lon}: {lat: number; lon: number}, {rejectWithValue}) => {
    try {
      const data = await getCurrentWeather(lat, lon);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetch7DayForecast = createAsyncThunk(
  'weather/fetch7DayForecast',
  async ({lat, lon}: {lat: number; lon: number}, {rejectWithValue}) => {
    try {
      const data = await get7DayForecast(lat, lon);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchHistoryWeather = createAsyncThunk(
  'weather/fetchHistoryWeather',
  async (
    {
      lat,
      lon,
      startDate,
      endDate,
    }: {lat: number; lon: number; startDate: string; endDate: string},
    {rejectWithValue},
  ) => {
    try {
      const response = await getHistoryWeather(lat, lon, startDate, endDate);
      return response?.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

// Thunk to fetch weather data based on the location
export const fetchWeatherWithCity = createAsyncThunk(
  'weather/fetchWeather',
  async (city: string, {rejectWithValue}) => {
    try {
      const response = await getWeatherWithCity(city);

      return response.data[0];
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

// Initial state
const initialState: WeatherState = {
  currentWeather: null,
  cityWeather: null,
  forecast: null,
  history: null,
  loading: false,
  error: null,
};

// Create a weather slice
const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Handle current weather
    builder
      .addCase(fetchCurrentWeather.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrentWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.currentWeather = action.payload as WeatherData;
      })
      .addCase(fetchCurrentWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Handle 7-day forecast
    builder
      .addCase(fetch7DayForecast.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetch7DayForecast.fulfilled, (state, action) => {
        state.loading = false;

        state.forecast = action.payload as ForecastData;
      })
      .addCase(fetch7DayForecast.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Handle historical weather
    builder
      .addCase(fetchHistoryWeather.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHistoryWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.history = action.payload as HistoryData;
      })
      .addCase(fetchHistoryWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
    builder
      .addCase(fetchWeatherWithCity.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherWithCity.fulfilled, (state, action) => {
        state.cityWeather = action.payload;
        state.loading = false;
      })
      .addCase(fetchWeatherWithCity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// Export the reducer
export default weatherSlice.reducer;
