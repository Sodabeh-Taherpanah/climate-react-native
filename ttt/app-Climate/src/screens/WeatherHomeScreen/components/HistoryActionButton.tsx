import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface HistoryActionButtonProps {
  onGoToHistory: () => void;
}

const HistoryActionButton: React.FC<HistoryActionButtonProps> = ({
  onGoToHistory,
}) => {
  return (
    <View style={styles.historyButton}>
      <Icon name="history" size={20} color="#a2a2a2" />
      <Button
        mode="text"
        textColor="white"
        icon="chevron-right"
        contentStyle={styles.buttonContentStyle}
        onPress={onGoToHistory}>
        <Text style={styles.buttonText}>History</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  historyButton: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderColor: 'gray',
    borderWidth: 0.4,
    borderRadius: 20,
    paddingHorizontal: 10,
    opacity: 0.6,
  },
  buttonContentStyle: {
    flexDirection: 'row-reverse',
  },
  buttonText: {
    marginStart: 10,
  },
});

export default HistoryActionButton;
