import {StackNavigationProp} from '@react-navigation/stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';

export type locationType = {
  latitude: number;
  longitude: number;
};

// Define the types for your stack navigator
export type RootStackParamList = {
  MainTabs: undefined;
  Forecast: {location?: locationType | null};
  History: {location?: locationType | null};
};

// Define the types for your tab navigator
export type BottomTabParamList = {
  Search: undefined;
  Home: undefined;
};

// Type for tab navigation
export type BottomTabNavigationPropType = BottomTabNavigationProp<
  BottomTabParamList,
  'Home'
>;

// Type for stack navigation
export type StackNavigationPropType = StackNavigationProp<
  RootStackParamList,
  'MainTabs'
>;

// Type for route prop in ForecastScreen
export type ForecastScreenRouteProp = RouteProp<RootStackParamList, 'Forecast'>;

// Type for route prop in ForecastScreen
export type HistoryScreenRouteProp = RouteProp<RootStackParamList, 'History'>;
