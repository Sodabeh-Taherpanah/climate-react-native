export const getWeatherIcon = (description: string) => {
  if (description?.includes('sunny')) {
    return 'weather-sunny';
  } else if (description?.includes('rain')) {
    return 'weather-rainy';
  }
  return 'weather-cloudy'; // Default icon
};

// Function to get the day of the week from a date string
export function getDayOfWeek(dateString: string) {
  const date = new Date(dateString); // Create a Date object from the date string
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]; // Array of days of the week
  return daysOfWeek[date.getDay()]; // Get the day of the week and return its name
}
export const convertTemperatureFormat = (temp: number, unit: string) => {
  if (unit === 'C') {
    return `${temp?.toFixed(0)} °C`;
  } else {
    // Convert Celsius to Fahrenheit
    const fahrenheit = (temp * 9) / 5 + 32;
    return `${fahrenheit?.toFixed(2)} °F`;
  }
};

export const convertTemperature = (tempInCelsius: number, state: boolean) => {
  return state ? tempInCelsius : (tempInCelsius * 9) / 5 + 32;
};

export const formatDate = (datetime: string) => {
  const getOrdinalSuffix = (day: number) => {
    if (day > 3 && day < 21) return 'th'; // covers 11th to 19th
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  const date = new Date(datetime.split(':')[0]);
  const day = date.getDate();
  const month = date.toLocaleString('default', {month: 'long'});
  const year = date.getFullYear();

  const formattedDate = `${day}${getOrdinalSuffix(day)} of ${month} ${year}`;
  return formattedDate;
};

export const CompareDates = (date1: string, date2: string) => {
  const dateB = new Date(date2);
  const dateA = new Date(date1);

  if (dateA.getTime() > dateB.getTime()) {
    return false;
  } else {
    return true;
  }
};
