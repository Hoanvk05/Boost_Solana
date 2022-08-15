import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {COLOR, COMMON, FONTSIZE} from '~constants';

export default function Item({icon, identify, price, cate, isShowPrice}) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperCategory}>
        <Text style={styles.txtCate}>{cate}</Text>
      </View>
      <Image style={styles.icon} source={{uri: icon}} />
      <View style={styles.wrapperText}>
        <Text style={[styles.txtPrimary, styles.txtName]}>{identify}</Text>
      </View>
      {isShowPrice && (
        <View style={styles.wrapperView}>
          <View
            style={{
              padding: 5,
              borderWidth: 1,
              borderRadius: COMMON.radiusSecondary,
            }}
          >
            <Text style={styles.txtPrimary}>{price} SOL</Text>
          </View>
          <View
            style={{
              padding: 5,
              paddingHorizontal: 10,
              backgroundColor: COLOR.bgColor__Main,
              borderRadius: COMMON.radiusSecondary,
            }}
          >
            <Text style={{...styles.txtPrimary, color: COLOR.txtColor__White}}>
              Buy
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexBasis: '47%',
    minHeight: 150,
    borderRadius: COMMON.radiusSecondary,
    borderWidth: 1,
    paddingHorizontal: 10,
    // paddingVertical: 10,
    position: 'relative',
    paddingBottom: COMMON.spaceItem,
  },
  icon: {
    height: 115,
    width: '100%',
    // backgroundColor: 'red',
    // resizeMode: 'contain',
  },
  txtPrimary: {
    color: COLOR.txtColor__Black,
    fontWeight: '700',
    fontSize: FONTSIZE.textFontPrimary,
    marginVertical: 5,
  },
  wrapperView: {
    minWidth: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wapperTxt: {
    height: 40,
    width: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: COMMON.radiusTertiary,
    borderWidth: 1,
  },
  wrapperText: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  txtName: {
    minWidth: 20,
    padding: 5,
    borderWidth: 1,
    borderRadius: COMMON.radiusTertiary,
  },
  wrapperCategory: {
    minHeight: 30,
    width: '100%',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 5,
  },
  txtCate: {
    fontSize: FONTSIZE.textFontSmall,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: COLOR.txtColor__Black,
    position: 'absolute',
    padding: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomLeftRadius: COMMON.radiusTertiary,
    borderBottomRightRadius: COMMON.radiusTertiary,
  },
});
