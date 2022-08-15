import React from 'react';
import {View, Text} from 'react-native';
import {COLOR, SIZEICONS} from '../../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {HomeCss} from '../../screens/home/styles';
import {Context} from '../../context/gameContext';

export const FakeLive = 98;
export default function OnlineUser({color, borderColor}) {
  const context = React.useContext(Context);
  return (
    <View
      style={{
        ...HomeCss.wrapperPoints,
        borderColor: borderColor ?? COLOR.bgColor__Black,
      }}
    >
      <MaterialIcons
        name="people-outline"
        size={SIZEICONS.sizeIcon_Secondary}
        style={{marginRight: 8}}
        color={color}
      />
      <Text style={{...HomeCss.txtSecondary, color: color}}>
        {context.amountUser ?? 98}K
      </Text>
    </View>
  );
}
