import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Token from './components/token';
import {walletCss} from './styles';
import Header from './components/header';
import {FakeStoreTickets} from '~dummyData/';
import Item from '~screens/marketplace/components/box/Item';
import DiaLog from '~components/Dialog';
import RenderDialog from './components/dialog';
import {small__logo_point, WALLET_4, WALLET_8} from '~constants/images';
import {COLOR} from '~constants/';

const listToken = [
  {
    id: 1,
    name: 'SOL',
    Icon: WALLET_4,
    points: 2.01,
  },
  {
    id: 2,
    name: 'SL2E',
    Icon: WALLET_8,
    points: 735,
  },
  {
    id: 3,
    name: 'BST',
    Icon: small__logo_point,
    points: 20,
  },
];

export default function Wallet() {
  const [visible, setVisible] = React.useState(false);
  return (
    <View style={walletCss.container}>
      {/* Header */}
      <Header setVisible={setVisible} />
      <ScrollView showsVerticalScrollIndicator={false} style={walletCss.Body}>
        <Text style={{...walletCss.txtSecondary, color: COLOR.txtColor__Main}}>
          My Balances
        </Text>
        <View style={walletCss.wrapperBalance}>
          {listToken.map((item, index) => (
            <View key={index.toString()}>
              <Token name={item.name} point={item.points} icon={item.Icon} />
              {index < listToken.length - 1 && (
                <View style={walletCss.devide}></View>
              )}
            </View>
          ))}
        </View>
        <Text style={{...walletCss.txtSecondary, color: COLOR.txtColor__Main}}>
          My NFT
        </Text>
        <View style={walletCss.wrappeNFTs}>
          <View style={{width: '49%', marginBottom: 10}}>
            <Item
              icon={FakeStoreTickets[0].image}
              identify={FakeStoreTickets[0].identify}
              price={FakeStoreTickets[0].price}
              cate={FakeStoreTickets[0].category}
            />
          </View>
        </View>
      </ScrollView>
      <DiaLog
        visible={visible}
        onShow={setVisible}
        title={'Check'}
        bodyChildren={<RenderDialog setVisible={setVisible} />}
      />
    </View>
  );
}
