import React from 'react';
import {View, Text, Image} from 'react-native';
import {fakeInfo} from '~components/Header';
import OnlineUser from '~components/OnlineUser';
import {COLOR} from '~constants';
import {HomeCss} from '../../styles';
export const FakePoints = 200;

export default function Header() {
  return (
    <View style={HomeCss.Header}>
      <View style={HomeCss.wrapperUser}>
        <Image source={{uri: fakeInfo.avatar}} style={HomeCss.userImages} />
        <Text style={{...HomeCss.txtPrimary, color: COLOR.txtColor__White}}>
          {fakeInfo.username}
        </Text>
      </View>
      <OnlineUser
        color={COLOR.bgColor__White}
        borderColor={COLOR.bgColor__White}
      />
    </View>
  );
}
