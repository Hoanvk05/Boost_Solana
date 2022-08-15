import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from '~components/Header';
import {COLOR, COMMON, FONTSIZE} from '~constants';
import {FakeStoreTickets} from '~dummyData';
import Item from './components/box/Item';
export default function Market() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />
      <View style={{marginTop: COMMON.spaceItem}}></View>
      {/* Tickets */}
      <View style={styles.wrapperTitle}>
        <Text style={{...styles.txtPrimary, color: COLOR.txtColor__Main}}>
          Hats MarketPlace
        </Text>
        <Text style={{marginLeft: 5}}>Choose your major</Text>
      </View>
      {/* {FakeStoreTickets.map(item => (
        <Box key={item.id} item={item} />
      ))} */}
      <FlatList
        data={FakeStoreTickets}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Item
            icon={item.image}
            identify={item.identify}
            price={item.price}
            cate={item.category}
            isShowPrice
          />
        )}
        numColumns={2}
        columnWrapperStyle={{
          marginVertical: 10,
          justifyContent: 'space-between',
        }}
      />

      {/* Item */}
      {/* <Text style={{...styles.txtPrimary}}>Items</Text>
      {FakeStoreItems.map(item => (
        <Box key={item.id} item={item} />
      ))} */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.bgColor__White,
    paddingHorizontal: COMMON.paddingHorizital,
  },
  txtPrimary: {
    fontSize: FONTSIZE.textFontTertiary,
    fontWeight: 'bold',
    color: COLOR.txtColor__Black,
    marginBottom: COMMON.spaceItem / 2,
  },
  wrapperTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
