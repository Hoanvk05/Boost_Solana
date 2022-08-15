import React from 'react';
import {View, FlatList} from 'react-native';
import {FakeMatchs} from '~dummyData';
import RoomPlay from '../../components/box/room';
import {competitiveCss} from '../../styles/competitive';

export default function Competitive() {
  return (
    <View style={competitiveCss.container}>
      <FlatList data={FakeMatchs} key={item => item.id} renderItem={RoomPlay} />
    </View>
  );
}
