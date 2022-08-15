import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {COLOR, COMMON, FONTSIZE} from '../../../../constants';

export default function Token({icon, name, point}) {
  return (
    <View style={styles.itemBalance}>
      <Image source={icon} style={styles.icon} />
      <View style={{width: 10}}></View>
      <View style={styles.wrapperContent}>
        <Text style={styles.txtPrimary}>{name}</Text>
        <Text style={styles.txtPrimary}>{point}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  itemBalance: {
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: COMMON.paddingHorizital,
    paddingVertical: 10,
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: COLOR.bgColor__Box_2,
  },
  wrapperContent: {
    height: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtPrimary: {
    fontSize: FONTSIZE.textFontPrimary,
    color: COLOR.txtColor__Black,
    fontWeight: 'bold',
  },
});
