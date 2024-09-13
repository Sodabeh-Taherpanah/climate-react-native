// useAnimatedHeader.ts
import {useRef} from 'react';
import {Animated} from 'react-native';

export const useAnimatedHeader = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight: Animated.AnimatedInterpolation<number> =
    scrollY.interpolate({
      inputRange: [0, 150],
      outputRange: [150, 0],
      extrapolate: 'clamp',
    });

  const headerOpacity: Animated.AnimatedInterpolation<number> =
    scrollY.interpolate({
      inputRange: [0, 150],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

  return {
    scrollY,
    headerHeight,
    headerOpacity,
  };
};
