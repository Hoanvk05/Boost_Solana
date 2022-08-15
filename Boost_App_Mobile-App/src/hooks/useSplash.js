import React from 'react';
import {Animated, Easing, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
export default function useSplash() {
  // call useContext to get isBlur of Lgoin
  const startAnimation = React.useRef(new Animated.Value(0)).current;
  // scale Logo
  const scaleLogo = React.useRef(new Animated.Value(1)).current;
  const MoveLogo = React.useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  // scale title
  const scaleTitle = React.useRef(new Animated.Value(1)).current;
  // MoveLogin
  const MoveLogin = React.useRef(new Animated.ValueXY({x: 0, y: height * 2}))
    .current;
  React.useEffect(() => {
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(startAnimation, {
          toValue: -height / 3,
          easing: Easing.ease,
          useNativeDriver: true,
        }).start(),
        Animated.timing(scaleLogo, {
          toValue: 0.26,
          useNativeDriver: true,
        }).start(),
        Animated.timing(MoveLogo, {
          toValue: {
            x: -width / 2 + 50,
            y: -width / 2 + 35,
          },
          useNativeDriver: true,
        }).start(),
        Animated.timing(scaleTitle, {
          toValue: 0,
          useNativeDriver: true,
        }).start(),
        Animated.timing(MoveLogin, {
          toValue: {
            x: 0,
            y: height / 3 - 90,
          },
          useNativeDriver: true,
        }).start(),
      ]);
    }, 1000);
  }, []);
  return [startAnimation, scaleLogo, MoveLogo, scaleTitle, MoveLogin];
}
