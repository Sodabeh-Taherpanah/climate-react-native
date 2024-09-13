// EmptyDataComponent.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';

interface EmptyDataComponentProps {
  message: string;
  style?: object;
}

const EmptyDataComponent: React.FC<EmptyDataComponentProps> = ({
  message,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Title style={styles.title}>{message}</Title>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0B2F7C', // Optional: Provide a default background color
  },
  title: {
    color: '#fff',
  },
});

export default EmptyDataComponent;
