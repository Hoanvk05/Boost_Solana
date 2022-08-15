import React from 'react';
import {View, FlatList} from 'react-native';
import {FakeMatchs} from '~dummyData';
import RoomTournament from '../../components/box/roomTour';
import {competitiveCss} from '../../styles/competitive';

export default function Tournament() {
  return (
    <View style={competitiveCss.container}>
      <FlatList
        data={FakeMatchs}
        key={item => item.id}
        renderItem={RoomTournament}
      />
    </View>
  );
}
