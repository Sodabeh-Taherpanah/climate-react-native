// Define types for the weather state

export interface WeatherData {
  temp: number;
  city_name: string;
  datetime: string;
  weather: {
    description: string;
  };
}

export interface ForecastData {
  data: Array<{
    datetime: string;
    max_temp: number;
    min_temp: number;
    wind_spd: number;
    rh: number;
    weather: {
      description: string;
    };
    // Add more fields based on the API response
  }>;
  city_name: string;
  country_code: string;
}

export interface HistoryData {
  data: Array<{
    temp: number;
    datetime: string;
    // Add more fields based on the API response
  }>;
}

export interface WeatherState {
  currentWeather: WeatherData | null;
  forecast: ForecastData | null;
  history: HistoryData | null;
  cityWeather: WeatherData | null;
  loading: boolean;
  error: string | null;
}
