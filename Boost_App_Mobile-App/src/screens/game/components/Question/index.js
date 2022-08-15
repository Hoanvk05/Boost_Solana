import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {gameCss} from '../../styles';
import ButtonChoose from '../Button';
const fakeQuestion =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent';
export default function Question() {
  return (
    <View style={gameCss.ItemContainer}>
      <ScrollView style={gameCss.Title}>
        <Text style={{...gameCss.txtPrimary, overflow: 'scroll'}}>
          {fakeQuestion}
        </Text>
      </ScrollView>
      {new Array(4).fill().map((item, index) => (
        <View key={index.toString()} style={{height: 40, marginVertical: 3}}>
          <ButtonChoose item={item} index={index} />
        </View>
      ))}
    </View>
  );
}
