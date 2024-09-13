import axios from 'axios';

const apiKey = 'a60450529f5646ed993db7331cdede37';
const baseURL = 'https://api.weatherbit.io/v2.0';

// Fetch current weather based on lat/lon
export const getCurrentWeather = async (lat: number, lon: number) => {
  const response = await axios.get(
    `${baseURL}/current?lat=${lat}&lon=${lon}&key=${apiKey}`,
  );
  return response.data.data[0]; // Assuming you're interested in the first result
};

// Fetch 7-day forecast based on lat/lon
export const get7DayForecast = async (lat: number, lon: number) => {
  const response = await axios.get(
    `${baseURL}/forecast/daily?lat=${lat}&lon=${lon}&days=7&key=${apiKey}`,
  );

  return response.data;
};

// Fetch historical weather data
export const getHistoryWeather = async (
  lat: number,
  lon: number,
  startDate: string | null,
  endDate: string | null,
) => {
  const response = await axios.get(
    `${baseURL}/history/daily?lat=${lat}&lon=${lon}&start_date=${startDate}&end_date=${endDate}&key=${apiKey}`,
  );
  return response.data;
};

// Fetch historical weather data
export const getWeatherWithCity = async (city: string) => {
  const response = await axios.get(
    `${baseURL}/current?city=${city}&key=${apiKey}`,
  );
  return response.data;
};
