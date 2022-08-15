import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLOR, SIZEICONS} from '../../../constants';
import {exploreCss} from '../../../screens/explore/styles';

const FakePlaceHolder = 'Type name or ID';
const activeOpacity = 0.6;
export default function InputSearch(props) {
  return (
    <View style={exploreCss.InputField}>
      <TextInput
        style={exploreCss.InputElement}
        keyboardType="default"
        onChangeText={props.onChange}
        value={props.valueInput}
        placeholder={FakePlaceHolder}
      />
      <TouchableOpacity
        style={exploreCss.iconSearch}
        activeOpacity={activeOpacity}
      >
        <AntDesign
          name="search1"
          size={SIZEICONS.sizeIcon_Primary}
          color={COLOR.bgColor__Black}
        />
      </TouchableOpacity>
    </View>
  );
}
