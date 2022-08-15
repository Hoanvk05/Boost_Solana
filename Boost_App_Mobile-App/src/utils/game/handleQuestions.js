import {Animated} from 'react-native';

export const animationNext = animation => {
  Animated.timing(animation, {
    toValue: 1,
    duration: 15 * 1000,
    useNativeDriver: false,
  }).start();
};

export const animationReset = animation => {
  Animated.timing(animation, {
    toValue: 0,
    duration: 200,
    useNativeDriver: false,
  }).start();
};
