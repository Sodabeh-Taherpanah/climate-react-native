import React from 'react';

import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {ErrorBoundary} from './src/utils/ErrorBoundary';
import {BottomTabParamList, RootStackParamList} from './src/utils/types';
import {
  WeatherHomeContainer,
  ForecastContainer,
  HistoryWeatherContainer,
  WeatherSearchContainer,
} from './src/screens'; // Import from index.ts
import {store} from './src/store/store';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createMaterialBottomTabNavigator<BottomTabParamList>();

const TabNavigator: React.FC = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Search"
      component={WeatherSearchContainer}
      options={{
        tabBarIcon: ({color, focused}) => (
          <Icon name="map-search" color={'gray'} size={22} />
        ),
      }}
    />
    <Tab.Screen
      name="Home"
      component={WeatherHomeContainer}
      options={{
        tabBarIcon: ({color, focused}) => (
          <Icon name="home" color={'gray'} size={22} />
        ),
      }}
    />
  </Tab.Navigator>
);

const App: React.FC = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="MainTabs">
            <Stack.Screen
              name="MainTabs"
              component={TabNavigator}
              options={{headerBackTitleVisible: false, headerShown: false}}
            />
            <Stack.Screen
              name="Forecast"
              component={ForecastContainer}
              options={{headerBackTitleVisible: false}}
            />
            <Stack.Screen
              name="History"
              component={HistoryWeatherContainer}
              options={{headerBackTitleVisible: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  </ErrorBoundary>
);

export default App;
