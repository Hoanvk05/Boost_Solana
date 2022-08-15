import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {COLOR, COMMON, FONTSIZE, SIZEICONS} from '../../../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {walletCss} from '../../styles';

const actions = [
  {
    id: 1,
    name: 'top-up',
    Icon: (
      <AntDesign
        name="pluscircleo"
        size={SIZEICONS.sizeIcon_Secondary}
        color={COLOR.bgColor__Black}
      />
    ),
  },
  {
    id: 2,
    name: 'receive',
    Icon: (
      <AntDesign
        name="download"
        size={SIZEICONS.sizeIcon_Secondary}
        color={COLOR.bgColor__Black}
      />
    ),
  },
  {
    id: 3,
    name: 'Trade',
    Icon: (
      <AntDesign
        name="swap"
        size={SIZEICONS.sizeIcon_Secondary}
        color={COLOR.bgColor__Black}
      />
    ),
  },
  {
    id: 4,
    name: 'Send',
    Icon: (
      <Ionicons
        name="arrow-redo-circle-outline"
        size={SIZEICONS.sizeIcon_Secondary}
        color={COLOR.bgColor__Black}
      />
    ),
  },
];
const fakeInfoWallet = {
  id: '567xc4v7z....3457983',
  currentSOL: '0.0575468',
};
export default function Header({setVisible}) {
  const navigation = useNavigation();
  return (
    <View style={walletCss.Header}>
      <View style={walletCss.navBar}>
        <TouchableOpacity
          style={{height: '100%', minWidth: 50}}
          activeOpacity={COMMON.activeOpacity}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="chevron-back"
            size={SIZEICONS.sizeIcon_Primary}
            color={COLOR.bgColor__White}
          />
        </TouchableOpacity>
        <Text
          style={{
            ...walletCss.txtHeader,
            flex: 1,
            marginLeft: -FONTSIZE.textFontQuaternary,
          }}
        >
          Wallet
        </Text>
        <TouchableOpacity
          style={{height: '100%', minWidth: 50}}
          activeOpacity={COMMON.activeOpacity}
          onPress={() => setVisible(true)}
        >
          <Ionicons
            name="settings-sharp"
            size={SIZEICONS.sizeIcon_Primary}
            color={COLOR.bgColor__White}
          />
        </TouchableOpacity>
      </View>
      <View style={walletCss.wrapperToken}>
        <Text style={{...walletCss.txtHeader, fontSize: 32}}>
          {fakeInfoWallet.currentSOL} SOL
        </Text>
        <Text style={walletCss.txtToken2}>{fakeInfoWallet.id}</Text>
      </View>
      <View style={walletCss.wrapperActions}>
        {actions.map(item => {
          const Icon = item.Icon;
          return (
            <View key={item.id} style={walletCss.Icons}>
              <TouchableOpacity
                activeOpacity={COMMON.activeOpacity}
                style={walletCss.action}
              >
                <View>{Icon}</View>
              </TouchableOpacity>
              <Text style={walletCss.txtPrimary}>{item.name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
