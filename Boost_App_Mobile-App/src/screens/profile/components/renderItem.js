import React from 'react';
import {View, Text} from 'react-native';
import {COLOR} from '../../../constants';
import {profileCss} from '../styles';
export default function RenderItem({item, index}) {
  return (
    <View
      style={{
        ...profileCss.sectionConnect,
        backgroundColor:
          index === 0 ? COLOR.bgColor__Main : COLOR.bgColor__White,
      }}
    >
      <Text
        style={{
          ...profileCss.txtPrimary,
          color: index === 0 ? COLOR.txtColor__White : COLOR.txtColor__Black,
        }}
      >
        {item}
      </Text>
    </View>
  );
}
