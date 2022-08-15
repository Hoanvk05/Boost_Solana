import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {DiaLogCss} from '../../../../components/Dialog/styles';
import {COLOR, COMMON, SIZEICONS} from '../../../../constants';
import {Icon} from '@rneui/themed';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function Header({title, onShow}) {
  return (
    <View style={DiaLogCss.wrapperTitle}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <FontAwesome
          name="heart"
          size={SIZEICONS.sizeIcon_Secondary}
          color={COLOR.Error}
        />
        <TouchableOpacity activeOpacity={COMMON.activeOpacity} onPress={onShow}>
          <Icon
            name="close"
            color={COLOR.bgColor__White}
            size={SIZEICONS.sizeIcon_Primary}
          />
        </TouchableOpacity>
      </View>
      <View style={DiaLogCss.secTitle}>
        <Text style={DiaLogCss.txtPrimary}>{title}</Text>
      </View>
      <View style={DiaLogCss.wrapperInfo}>
        <View style={DiaLogCss.info}>
          <Text
            style={{...DiaLogCss.txtSecondary, color: COLOR.txtColor__Black}}
          >
            Rewards
          </Text>
          <Text
            style={{...DiaLogCss.txtSecondary, color: COLOR.txtColor__Black}}
          >
            $255K
          </Text>
        </View>
        <View style={DiaLogCss.info_2}>
          <Text
            style={{...DiaLogCss.txtSecondary, color: COLOR.txtColor__Black}}
          >
            Mode
          </Text>
          <Text
            style={{...DiaLogCss.txtSecondary, color: COLOR.txtColor__Black}}
          >
            Tournament
          </Text>
        </View>
        <View style={DiaLogCss.info}>
          <Text
            style={{...DiaLogCss.txtSecondary, color: COLOR.txtColor__Black}}
          >
            Rank
          </Text>
          <Text
            style={{...DiaLogCss.txtSecondary, color: COLOR.txtColor__Black}}
          >
            Gold
          </Text>
        </View>
      </View>
    </View>
  );
}
