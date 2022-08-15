import React from 'react';
import {View, Text, Image} from 'react-native';
import {gameCss} from '../../styles/styles';

export default function RenderItem({item}) {
  return (
    <View style={gameCss.itemRow}>
      <Image style={gameCss.avatar} source={{uri: item.avatar}} />
      <Text style={gameCss.txtSecondary}>{item.name}: </Text>
      <Text style={{...gameCss.txtSecondary, fontWeight: '500'}}>
        {item.content}
      </Text>
    </View>
  );
}
