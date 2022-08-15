import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLOR, SIZEICONS} from '~constants/';
import {
  WALLET_1,
  WALLET_2,
  WALLET_3,
  WALLET_4,
  WALLET_5,
  WALLET_6,
  WALLET_7,
} from '~constants/images';
import {walletCss} from '~screens/wallet/styles';

const listWalletConnect = [
  {
    id: 1,
    icon: WALLET_1,
    name: 'Phantom',
    isConnected: true,
  },
  {
    id: 2,
    icon: WALLET_2,
    name: 'Torus',
  },
  {
    id: 3,
    icon: WALLET_3,
    name: 'Ledger',
  },
  {
    id: 4,
    icon: WALLET_4,
    name: 'Sollet',
  },
  {
    id: 5,
    icon: WALLET_5,
    name: 'Slope',
  },
  {
    id: 6,
    icon: WALLET_6,
    name: 'Solflare',
  },
  {
    id: 7,
    icon: WALLET_7,
    name: 'Sollet (Extension)',
  },
];

const renderItem = ({item}) => {
  return (
    <View style={walletCss.wrapperItems}>
      <Image source={item.icon} style={walletCss.walletIcons} />
      <View style={{width: 10}}></View>
      <View style={walletCss.wrapperFlex}>
        <Text style={{...walletCss.txtPrimary, color: COLOR.bgColor__White}}>
          {item.name}
        </Text>
        {item.isConnected && (
          <Text
            style={{
              ...walletCss.txtPrimary,
              color: item.isConnected ? COLOR.Success : COLOR.txtColor__Black,
            }}
          >
            Connected
          </Text>
        )}
      </View>
    </View>
  );
};
export default function RenderDialog({setVisible}) {
  return (
    <View style={walletCss.wapperDialog}>
      <View style={walletCss.dialogHeader}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={[walletCss.txtPrimary, walletCss.txtTitle]}>
            Connect to Solana wallet
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => setVisible(false)}
          style={walletCss.btnClose}
        >
          <AntDesign
            name="closesquareo"
            size={SIZEICONS.sizeIcon_Secondary}
            color={COLOR.bgColor__White}
          />
        </TouchableOpacity>
      </View>
      <View style={walletCss.wrapperContent}>
        <FlatList
          data={listWalletConnect}
          key={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}
