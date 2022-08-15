import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {COLOR, COMMON} from '../../constants';
import {profileCss} from '../../screens/profile/styles';
export default function BTNWidth({icon, title, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={COMMON.activeOpacity}
      style={profileCss.btnLogout}
    >
      {icon && <View style={profileCss.icon}>{icon}</View>}
      <Text
        style={{
          ...profileCss.txtPrimary,
          color: COLOR.txtColor__White,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
