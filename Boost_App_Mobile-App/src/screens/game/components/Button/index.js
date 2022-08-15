import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLOR, FONTSIZE, COMMON} from '~constants/';
import {Context} from '~context/gameContext';

export default function ButtonChoose({
  option,
  correctOption,
  currentOptionSelected,
  onPress,
  isDisable,
}) {
  const context = React.useContext(Context);
  return (
    <TouchableOpacity
      disabled={isDisable}
      onPress={onPress}
      activeOpacity={COMMON.activeOpacity}
      style={{
        ...styles.container,
        borderWidth: 3,
        borderColor:
          option == correctOption && option == currentOptionSelected
            ? COLOR.Success
            : option == currentOptionSelected
            ? COLOR.Error
            : COLOR.bgColor__Black,
        backgroundColor:
          option == correctOption && option == currentOptionSelected
            ? COLOR.Success + '20'
            : option == currentOptionSelected
            ? COLOR.Error + '20'
            : COLOR.bgColor__White,
      }}
    >
      <Text
        style={{
          ...styles.txtPrimary,
          color:
            option == currentOptionSelected
              ? COLOR.txtColor__White
              : COLOR.txtColor__Black,
        }}
      >
        {option}
      </Text>

      {option == correctOption && option == currentOptionSelected ? (
        <View
          style={{
            // ...styles.sectionChecked,
            // backgroundColor: COLOR.Success,
            color: COLOR.txtColor__White,
          }}
        >
          {/* <MaterialCommunityIcons
            name="check"
            style={{
              color: COLOR.bgColor__White,
              fontSize: FONTSIZE.textFontQuaternary - 3,
            }}
          /> */}
          <Text style={{color: COLOR.txtColor__White}}>{context.player}</Text>
        </View>
      ) : option == currentOptionSelected ? (
        <View
          style={{
            ...styles.sectionChecked,
            backgroundColor: COLOR.Error,
          }}
        >
          <MaterialCommunityIcons
            name="close"
            style={{
              color: COLOR.bgColor__White,
              fontSize: FONTSIZE.textFontQuaternary - 3,
            }}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: COMMON.radiusTertiary,
    borderWidth: 1,
    borderColor: COLOR.bgColor__Black,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtPrimary: {
    color: COLOR.txtColor__Black,
    fontWeight: 'bold',
    fontSize: FONTSIZE.textFontSmall,
  },
  sectionChecked: {
    width: 25,
    height: 25,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
