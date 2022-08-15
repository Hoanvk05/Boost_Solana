import React from 'react';
import {View, Text, Image} from 'react-native';
import {DiaLogCss} from '../../../../components/Dialog/styles';
import {COLOR} from '../../../../constants';
import {logo} from '~constants/images';
export default function Body({}) {
  return (
    <View style={{minHeight: 50}}>
      <View style={DiaLogCss.divider}></View>
      <View style={DiaLogCss.body}>
        <Image source={logo} style={DiaLogCss.logo} />
        <Text
          style={{
            ...DiaLogCss.txtPrimary,
            fontSize: 35,
            color: COLOR.txtColor__Black,
            marginLeft: -30,
          }}
        >
          Boost
        </Text>
      </View>
    </View>
  );
}
