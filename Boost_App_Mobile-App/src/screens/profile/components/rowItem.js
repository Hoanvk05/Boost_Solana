import React from 'react';
import {View, Text} from 'react-native';
import {profileCss} from '../styles';
export default function RowItem({icon, number, title}) {
  return (
    <View style={profileCss.itemInfo}>
      {icon}
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <Text style={{...profileCss.txtPrimary, textAlign: 'center'}}>
          {number}
        </Text>
        <Text style={{...profileCss.txtPrimary, textAlign: 'center'}}>
          {title}
        </Text>
      </View>
    </View>
  );
}
