import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {competitiveCss} from '../../styles/competitive';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {COLOR, COMMON, SIZEICONS} from '../../../../constants';
export default function RoomTournament({item, index}) {
  return (
    <View
      style={{
        ...competitiveCss.Box,
        backgroundColor:
          Math.floor(index % 2) === 0
            ? COLOR.bgColor__Button_1
            : Math.floor(index % 3) === 0
            ? COLOR.bgColor__Button_2
            : COLOR.bgColor__Button_3,
      }}
    >
      <Text style={competitiveCss.txtPrimary}>{item.roomName}</Text>
      <View style={competitiveCss.itemRow}>
        <FontAwesome5 name="crown" size={35} color={COLOR.bgColor__White} />
        <TouchableOpacity
          style={competitiveCss.actions}
          activeOpacity={COMMON.activeOpacity}
        >
          <Text
            style={{
              ...competitiveCss.txtSecondary,
              fontSize: 14,
              color: COLOR.txtColor__White,
            }}
          >
            Join
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={competitiveCss.txtPrimary}>${item.rewards}</Text>
        <View style={{position: 'absolute', right: -5, top: 5}}>
          <Text
            style={{
              ...competitiveCss.txtSecondary,
              color: COLOR.txtColor__White,
            }}
          >
            Time left
          </Text>
          <Text
            style={{
              ...competitiveCss.txtSecondary,
              color: COLOR.txtColor__White,
            }}
          >
            00:30
          </Text>
        </View>
      </View>
    </View>
  );
}
