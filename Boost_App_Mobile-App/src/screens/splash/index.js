import React from 'react';
import {
  StyleSheet,
  Animated,
  Dimensions,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import Login from '../login';
import useSplash from '../../hooks/useSplash';
import {Logo_Splash} from '../../constants/images';
import {COLOR} from '../../constants';

const {height, width} = Dimensions.get('window');
export default function Splash(Props) {
  const [
    startAnimation,
    scaleLogo,
    MoveLogo,
    scaleTitle,
    MoveLogin,
  ] = useSplash();
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      style={styles.ContainerA}
    >
      <KeyboardAvoidingView behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView
            style={{
              height: height,
              width: width,
            }}
          >
            <Animated.View
              style={{
                height: '100%',
                width: '100%',
                zIndex: 1,
                transform: [
                  {
                    translateY: startAnimation,
                  },
                ],
              }}
            >
              <Animated.View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Animated.Image
                  style={{
                    height: 280,
                    width: 160,
                    marginBottom: 20,
                    transform: [
                      {
                        translateX: MoveLogo.x,
                      },
                      {scale: scaleLogo},
                    ],
                  }}
                  source={Logo_Splash}
                />
                <Animated.Text
                  style={{
                    color: COLOR.bgColor__Black,
                    fontSize: 65,
                    lineHeight: 67,
                    fontWeight: 'bold',
                    transform: [
                      {
                        translateX: MoveLogo.x,
                      },
                      {
                        translateY: MoveLogo.y,
                      },
                      {scale: scaleTitle},
                    ],
                  }}
                >
                  Boost
                </Animated.Text>
              </Animated.View>
            </Animated.View>
            <Animated.View
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1,
                transform: [{translateY: MoveLogin.y}],
              }}
            >
              <Login {...Props} />
            </Animated.View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  ContainerA: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLOR.bgColor__White,
  },
});
