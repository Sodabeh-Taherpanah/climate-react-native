// hooks/useLocation.ts
import {useState, useEffect, useCallback} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {locationType} from '../utils/types';

const useLocation = () => {
  const [location, setLocation] = useState<locationType | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getLocation = useCallback(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({lat: latitude, lon: longitude});
      },
      error => {
        console.error('Geolocation error:', error);
        let errorMessage = 'An unknown error occurred.';

        switch (error.code) {
          case 1:
            errorMessage = 'Permission denied.';
            break;
          case 2:
            errorMessage = 'Position unavailable.';
            break;
          case 3:
            errorMessage = 'Request timed out.';
            break;
          default:
            errorMessage = error.message || 'An unknown error occurred.';
            break;
        }

        setError(errorMessage);
      },
      {enableHighAccuracy: false, maximumAge: Infinity, timeout: 60000},
    );
  }, []);
  useEffect(() => {
    getLocation();
  }, [getLocation]);

  return {location, getLocation, error};
};

export default useLocation;
