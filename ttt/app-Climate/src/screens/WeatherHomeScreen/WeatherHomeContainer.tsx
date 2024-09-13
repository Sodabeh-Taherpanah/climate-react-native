// screens/WeatherScreen/WeatherContainer.tsx

import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  ActivityIndicator,
  Text,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
// import Geolocation from '@react-native-community/geolocation';
import Geolocation from 'react-native-geolocation-service';
import {fetchCurrentWeather} from '../../features/weather/weatherSlice';
import {AppDispatch, RootState} from '../../store/store';
import WeatherHomePresentation from './WeatherHomePresentation';
import {locationType, RootStackParamList} from '../../utils/types';
import useLocation from '../../hooks/useLocation';
import useNotification from '../../hooks/useNotification';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

type WeatherHomeContainerNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MainTabs'
>;

const WeatherHomeContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<WeatherHomeContainerNavigationProp>();
  // state to hold location
  const [location, setLocation] = useState<locationType>({
    latitude: 0,
    longitude: 0,
  });
  // const {error: locationError} = useLocation();
  const {notification, setNotificationMessage, resetNotification} =
    useNotification();

  const currentWeather = useSelector(
    (state: RootState) => state.weather.currentWeather,
  );
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);

  // Function to check and request location permission
  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const permission = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

      if (permission === RESULTS.GRANTED) {
        // Permission granted
        return true;
      }

      // Request permission
      const result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      return result === RESULTS.GRANTED;
    } else {
      console.log('apppp');
      // Handle Android permissions separately
      const permission = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
      return permission === RESULTS.GRANTED;
    }
  };

  const getLocation = async () => {
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) {
      Alert.alert(
        'Permission Denied',
        'Location permission is required to use this feature.',
      );
      return;
    }

    // If permission granted, fetch the location
    Geolocation.getCurrentPosition(
      position => {
        console.log('Position:', position?.coords);
        Alert.alert('Position', position?.coords?.latitude.toString());
        setLocation(position?.coords); // Update your state
      },
      error => {
        console.log('Geolocation Error:', error);
        setLocation({latitude: 0, longitude: 0});
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    dispatch(
      fetchCurrentWeather({lat: location?.latitude, lon: location?.longitude}),
    ); // Example coordinates for San Francisco
  }, [dispatch, location]);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // if (locationError) {
  //   return (
  //     <View
  //       style={{
  //         flex: 1,
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //       }}>
  //       <Text>{locationError}</Text>
  //     </View>
  //   );
  // }

  return (
    <View style={{flex: 1}}>
      <WeatherHomePresentation
        currentWeather={currentWeather}
        onGotoForecast={() => {
          if (location) {
            navigation.navigate('Forecast', {location});
          }
        }}
        onGoToHistory={() => {
          location && navigation.navigate('History', {location});
        }}
        notification={notification}
        onGetLocation={getLocation}
        onResetNotification={resetNotification}
      />
    </View>
  );
};

export default WeatherHomeContainer;
