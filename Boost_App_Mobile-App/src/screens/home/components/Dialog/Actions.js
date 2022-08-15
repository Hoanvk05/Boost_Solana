import React from 'react';
import {View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BTNWidth from '../../../../components/Button/BTNWidth';
import {DiaLogCss} from '../../../../components/Dialog/styles';
import {COLOR, SIZEICONS} from '../../../../constants';
import {useNavigation} from '@react-navigation/native';
export default function Actions({data}) {
  const navigation = useNavigation();
  return (
    <View style={DiaLogCss.wrapperActions}>
      <BTNWidth
        title={'Share'}
        icon={
          <FontAwesome
            name="share-square-o"
            color={COLOR.bgColor__White}
            size={SIZEICONS.sizeIcon_Secondary}
          />
        }
      />
      <View style={{marginHorizontal: 10}}></View>
      <BTNWidth
        onPress={() => navigation.navigate('Game', data)}
        icon={
          <FontAwesome
            name="play"
            color={COLOR.bgColor__White}
            size={SIZEICONS.sizeIcon_Secondary}
          />
        }
        title={'Join'}
      />
    </View>
  );
}
