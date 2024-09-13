// AnimatedHeader.tsx
import React from 'react';
import {Animated, View, StyleSheet, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface AnimatedHeaderProps {
  headerHeight: Animated.AnimatedInterpolation<number>;
  headerOpacity: Animated.AnimatedInterpolation<number>;
  cityName: string | undefined;
  countryCode: string | undefined;
}

const AnimatedHeader: React.FC<AnimatedHeaderProps> = ({
  headerHeight,
  headerOpacity,
  cityName,
  countryCode,
}) => {
  return (
    <Animated.View
      style={[styles.header, {height: headerHeight, opacity: headerOpacity}]}>
      <View style={styles.cardTitle}>
        <View style={styles.headerInfo}>
          <Text style={styles.textPlaces}>{cityName}</Text>
          <Text style={styles.textPlaces}>{countryCode}</Text>
        </View>
        <Text style={styles.textPlaces}>
          Weather forecast for the next seven days
        </Text>
        <Icon
          style={styles.arrowIcon}
          name={'arrow-down-bold'}
          size={30}
          color={'white'}
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    zIndex: 1,
  },
  cardTitle: {
    marginBottom: 20,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  headerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  textPlaces: {
    fontSize: 18,
    color: 'white',
  },
  arrowIcon: {
    marginTop: 8,
  },
});

export default AnimatedHeader;
