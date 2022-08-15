import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {small__logo_point, WALLET_8} from '~constants/images';
import {COLOR, COMMON, SIZEICONS} from '../../constants';
import {exploreCss} from '../../screens/explore/styles';

export const fakeInfo = {
  username: 'Mikah Dang',
  avatar:
    'https://scontent.fhan14-1.fna.fbcdn.net/v/t1.15752-9/292397197_380256194260797_6389557924948728034_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=YF-xF3nrgp8AX-aOlxs&_nc_ht=scontent.fhan14-1.fna&oh=03_AVIMXnANP1IRUa5VNWZ721cBY4yRzdLoTxiWeBIc1qO05w&oe=6320BBFD',
};
export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={exploreCss.Header}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={{uri: fakeInfo.avatar}} style={exploreCss.avatar} />
        <Text
          style={{
            ...exploreCss.txtPrimary,
            marginLeft: 10,
            color: COLOR.txtColor__Main,
          }}
        >
          {fakeInfo.username}
        </Text>
      </View>
      <View style={exploreCss.wrapperPoints}>
        <Image source={small__logo_point} style={exploreCss.circle} />

        <Text style={exploreCss.txtSpace}>735</Text>
        <Image source={WALLET_8} style={exploreCss.circle} />
        <Text style={{...exploreCss.txtSpace, marginRight: 50}}>20</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Wallet')}
          activeOpacity={COMMON.activeOpacity}
          style={{
            ...exploreCss.circle,
            height: 50,
            width: 50,
            borderRadius: 25,
            padding: 5,
            position: 'absolute',
            right: 0,
            backgroundColor: COLOR.bgColor__Main,
          }}
        >
          <Ionicons
            name="md-cash-outline"
            color={COLOR.bgColor__White}
            size={SIZEICONS.sizeIcon_Secondary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
