import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {COLOR, SIZEICONS} from '../../constants';
import {exploreCss} from '../../screens/explore/styles';
import Entypo from 'react-native-vector-icons/Entypo';
const activeOpacity = 0.6;
export default function BTNCategories({item}) {
  return (
    <View style={{...exploreCss.typeElement, flexBasis: '48%'}}>
      <Text style={exploreCss.txtPrimary}>{item.typeName}</Text>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        style={exploreCss.btnActionPlay}
      >
        <Entypo
          name="controller-play"
          size={SIZEICONS.sizeIcon_Primary}
          color={COLOR.bgColor__Black}
        />
      </TouchableOpacity>
    </View>
  );
}
