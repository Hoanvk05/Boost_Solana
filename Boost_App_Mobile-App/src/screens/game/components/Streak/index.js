import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {COLOR, COMMON} from '../../../../constants';
import {gameCss} from '../../styles/styles';
const listStreak = [
  {
    id: 1,
    text: '50/50',
    color: '#F4BBBB',
  },
  {
    id: 2,
    text: 'Shield',
    color: COLOR.bgColor__Main,
  },
  {
    id: 3,
    text: 'X2',
    color: '#4D96FF',
  },
];
export default function Streak() {
  return (
    <View style={gameCss.wrapperItems}>
      {listStreak.map(item => (
        <TouchableOpacity
          key={item.id}
          activeOpacity={COMMON.activeOpacity}
          style={{...gameCss.listStreak, backgroundColor: item.color}}
        >
          <Text style={{...gameCss.txtSecondary, color: COLOR.txtColor__White}}>
            {item.text}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
