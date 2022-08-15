import React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {COLOR, COMMON, SIZEICONS} from '../../../constants';
const inputHeight = 45;
const paddingInput = 15;
export default function Typing({placeHolder, keyType}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.Input}
        placeholder={placeHolder}
        keyboardType={keyType}
        placeholderTextColor={COLOR.txtColor__White}
      />
      <TouchableOpacity
        activeOpacity={COMMON.activeOpacity}
        style={styles.icons}
      >
        <Feather
          name="send"
          size={SIZEICONS.sizeIcon_Secondary}
          color={COLOR.bgColor__White}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: inputHeight,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLOR.bgColor__White,
    flexDirection: 'row',
    position: 'relative',
    borderRadius: COMMON.radiusPrimary,
  },
  Input: {
    height: '100%',
    width: '100%',
    padding: paddingInput,
    borderRadius: COMMON.radiusPrimary,
    // backgroundColor: '#0E185F',
  },
  icons: {
    position: 'absolute',
    right: 20,
    top: Math.floor(inputHeight / 2) - paddingInput,
  },
});
