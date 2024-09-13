import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface NotificationBoxProps {
  notification: string;
  onResetNotification: () => void;
}

const NotificationBox: React.FC<NotificationBoxProps> = ({
  notification,
  onResetNotification,
}) => {
  return (
    <View style={styles.notificationContainer}>
      <Text style={styles.notificationText}>{notification}</Text>
      <TouchableOpacity onPress={onResetNotification}>
        <Text style={styles.dismissButton}>Dismiss</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationContainer: {
    padding: 15,
    backgroundColor: 'red',
    borderRadius: 5,
    marginTop: 20,
  },
  notificationText: {
    color: 'white',
    fontSize: 16,
  },
  dismissButton: {
    color: 'white',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default NotificationBox;
