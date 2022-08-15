import React from 'react';
import {View, Animated} from 'react-native';
import {COLOR} from '../../../../constants';
function ProgressBar({current, animation}) {
  return (
    <View
      style={{
        width: '100%',
        height: 20,
        borderColor: COLOR.bgColor__White,
        backgroundColor: '#00000020',
        marginTop: 10,
      }}
    >
      <Animated.View
        style={[
          {
            height: 20,
            borderRadius: 20,
            backgroundColor: COLOR.bgColor__Main,
          },
          {
            width: animation,
          },
        ]}
      ></Animated.View>
    </View>
  );
}
export default React.memo(ProgressBar);
