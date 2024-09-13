import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

interface ForecastActionButtonProps {
  onGotoForecast: () => void;
}

const ForecastActionButton: React.FC<ForecastActionButtonProps> = ({
  onGotoForecast,
}) => {
  return (
    <View style={styles.footer}>
      <Button
        mode="outlined"
        textColor="white"
        icon="chevron-right"
        contentStyle={styles.buttonContentStyle}
        style={styles.outlinedButton}
        onPress={onGotoForecast}>
        7 Days Forecast
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 36,
    marginRight: 16,
    alignItems: 'center',
    borderRadius: 10,
    opacity: 0.6,
    gap: 20,
  },
  outlinedButton: {
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttonContentStyle: {
    flexDirection: 'row-reverse',
  },
});

export default ForecastActionButton;
