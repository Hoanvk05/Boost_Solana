import React from 'react';
import {View, Text} from 'react-native';
import {COLOR} from '~constants/';
import {competitiveCss} from '../../styles/competitive';
import AvatarDouble from '../list/avatarDouble';
import AvatarSingle from '../list/avatarSingle';
export default function RoomPlay({item, index}) {
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
      {item.playType === 'solo' ? (
        <AvatarSingle players={item.players} />
      ) : (
        <AvatarDouble players={item.players} />
      )}

      <Text style={competitiveCss.txtPrimary}>${item.rewards}</Text>
    </View>
  );
}
