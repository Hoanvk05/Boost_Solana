import React from 'react';
import {View, Text, Image} from 'react-native';
import {COLOR, FONTSIZE} from '~constants';
import {LeaderBoardCss} from '../../styles/LeaderBoardcss';
export default function userRank({item}) {
  return (
    <View style={LeaderBoardCss.userRank}>
      <Text
        style={{
          ...LeaderBoardCss.txtPrimary,
          fontSize: FONTSIZE.textFontSmall,
          color: item.color ?? COLOR.txtColor__Black,
          // textTransform: 'lowercase',
        }}
      >
        {item.rank}
      </Text>
      <Image source={{uri: item.avatar}} style={LeaderBoardCss.avatar} />
      <Text style={{...LeaderBoardCss.txtPrimary, fontWeight: 'bold'}}>
        {item.username}
      </Text>
      <Text style={{...LeaderBoardCss.txtPrimary, textAlign: 'right', flex: 1}}>
        {item.points} pts
      </Text>
    </View>
  );
}
