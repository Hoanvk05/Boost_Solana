import React from 'react';
import {View, Image} from 'react-native';
import {competitiveCss} from '../../styles/competitive';
export default function AvatarDouble({players}) {
  const groups_team1 = players.filter(m => m.team === 'team 1');
  const groups_team2 = players.filter(m => m.team === 'team 2');
  return (
    <View style={competitiveCss.avatarList}>
      <View style={competitiveCss.itemRow}>
        <Image
          source={{uri: groups_team1[0].avatar}}
          style={competitiveCss.avatar}
        />
        <Image
          source={{uri: groups_team1[1].avatar}}
          style={{
            ...competitiveCss.avatar,
            marginLeft: -25,
          }}
        />
      </View>
      <View style={competitiveCss.itemRow}>
        <Image
          source={{uri: groups_team2[0].avatar}}
          style={competitiveCss.avatar}
        />
        <Image
          source={{uri: groups_team2[1].avatar}}
          style={{
            ...competitiveCss.avatar,
            marginLeft: -25,
          }}
        />
      </View>
    </View>
  );
}
