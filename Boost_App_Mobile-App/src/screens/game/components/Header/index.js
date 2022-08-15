import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLOR, SIZEICONS, COMMON} from '../../../../constants';
import {gameCss} from '../../styles/styles';
import usePoints from '../../../../hooks/usePoints';
import OnlineUser from '../../../../components/OnlineUser';
import {small__logo_point, WALLET_8} from '../../../../constants/images';

export default function Header({onNavigate}) {
  const [points] = usePoints();
  return (
    <View style={gameCss.Header}>
      <TouchableOpacity
        onPress={onNavigate}
        activeOpacity={COMMON.activeOpacity}
      >
        <AntDesign
          name="closesquareo"
          color={COLOR.bgColor__White}
          size={SIZEICONS.sizeIcon_Primary}
        />
      </TouchableOpacity>
      <View style={gameCss.wrapperTotalPoints}>
        <Image source={WALLET_8} style={gameCss.iconPoints} />
        <Text style={gameCss.txtPrimary}>{points}</Text>
      </View>
      <OnlineUser
        color={COLOR.bgColor__White}
        borderColor={COLOR.bgColor__White}
      />
      {/* <TouchableOpacity activeOpacity={COMMON.activeOpacity}>
        <Entypo
          name="dots-three-vertical"
          color={COLOR.bgColor__White}
          size={SIZEICONS.sizeIcon_Secondary}
        />
      </TouchableOpacity> */}
    </View>
  );
}
