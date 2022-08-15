import React from 'react';
import {View, Text} from 'react-native';
import {COLOR} from '../../../../constants';
import {loginCss} from '../../style';

const textWelcome = 'Chào mừng bạn đến với Boots';
const textWelcomeSplit = textWelcome.split(' ');
export default function Header() {
  return (
    <View style={loginCss.SectionHeader}>
      <View
        style={{
          flexDirection: 'row',
          width: '80%',
          flexWrap: 'wrap',
          marginLeft: -7,
        }}
      >
        {textWelcomeSplit.map((item, index) => (
          <Text
            key={index.toString()}
            style={
              index == textWelcomeSplit.length - 1
                ? {...loginCss.txtTitle, color: COLOR.bgColor__Main}
                : loginCss.txtTitle
            }
          >
            {item}
          </Text>
        ))}
      </View>
    </View>
  );
}
