import React from 'react';
import {View, Text} from 'react-native';
import {TopPlayerCss} from '../../styles/Topplayercss';
export default function StatusBar({text}) {
  return (
    <View style={TopPlayerCss.sectionStatus}>
      <Text style={TopPlayerCss.txtCongra}>{text}</Text>
    </View>
  );
}
