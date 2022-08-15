import React from 'react';
import {View, Image} from 'react-native';
import {competitiveCss} from '../../styles/competitive';

export default function AvataSingle({players}) {
  const groups_team1 = players.filter(m => m.team === 'team 1');
  const groups_team2 = players.filter(m => m.team === 'team 2');
  return (
    <View style={competitiveCss.avatarList}>
      {groups_team1.map((item, index) => (
        <View key={index.toString()} style={competitiveCss.itemRow}>
          <Image source={{uri: item.avatar}} style={competitiveCss.avatar} />
        </View>
      ))}
      {groups_team2.map((item, index) => (
        <View key={index.toString()} style={competitiveCss.itemRow}>
          <Image source={{uri: item.avatar}} style={competitiveCss.avatar} />
        </View>
      ))}
    </View>
  );
}
