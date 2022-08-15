import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLOR, FONTSIZE} from '../../constants';

export default function CardColumn(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.txtPrimary}>{props.title}</Text>
      {props.children}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    minHeight: 50,
    backgroundColor: COLOR.bgColor__White,
    marginVertical: 16,
  },
  txtPrimary: {
    fontSize: FONTSIZE.textFontSecondary,
    fontWeight: 'bold',
    color: COLOR.txtColor__Black,
    marginBottom: 8,
  },
});
