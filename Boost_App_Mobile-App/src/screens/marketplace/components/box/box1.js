import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {COLOR, COMMON, FONTSIZE} from '../../../../constants';

export default function Box({item}) {
  return (
    <View style={styles.Box}>
      <View style={styles.secGroup}>
        <Image source={{uri: item.image}} style={styles.secImages} />
        <View style={styles.secContent}>
          <Text style={styles.txtPrimary}>{item.name}</Text>
          <Text style={styles.txtSecondary}>{item.desc}</Text>
        </View>
      </View>
      <View style={styles.secPrice}>
        <Text style={{...styles.txtSecondary, color: COLOR.txtColor__Black}}>
          ${item.price}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Box: {
    minHeight: 100,
    width: '100%',
    padding: COMMON.paddingHorizital,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: COMMON.radiusSecondary,
    borderColor: COLOR.bgColor__Black,
    marginBottom: COMMON.spaceItem,
  },
  secImages: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  txtPrimary: {
    fontSize: FONTSIZE.textFontSecondary,
    fontWeight: '900',
    color: COLOR.txtColor__Black,
  },
  txtSecondary: {
    fontSize: FONTSIZE.textFontPrimary,
    fontWeight: '400',
    color: COLOR.txtColor__Blur,
  },
  secGroup: {
    flexDirection: 'row',
  },
  secPrice: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLOR.bgColor__Black,
  },
  secContent: {
    marginLeft: 10,
    marginTop: COMMON.paddingHorizital,
  },
});
