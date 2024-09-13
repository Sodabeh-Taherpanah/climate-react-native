import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

interface SearchWithCityComponentProps {
  location: string;
  onLocationChange: (text: string) => void;
  onFetchWeather: () => void;
}

const SearchWithCityComponent: React.FC<SearchWithCityComponentProps> = ({
  location,
  onLocationChange,
  onFetchWeather,
}) => {
  return (
    <>
      {/* Input field to enter the city */}
      <TextInput
        style={styles.input}
        placeholder="Enter location"
        value={location}
        onChangeText={onLocationChange}
      />

      {/* Search button */}
      <Button
        mode="elevated"
        textColor="white"
        style={styles.outlinedButton}
        onPress={onFetchWeather}>
        Check Weather
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    marginHorizontal: 36,
    color: 'white',
  },
  outlinedButton: {
    borderColor: 'gray',
    borderWidth: 1,
    width: '50%',
    alignSelf: 'center',
    marginVertical: 16,
    backgroundColor: '#e2af3f',
  },
});

export default SearchWithCityComponent;
