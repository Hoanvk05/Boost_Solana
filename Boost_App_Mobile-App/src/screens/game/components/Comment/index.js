import React from 'react';
import {View, FlatList} from 'react-native';
import Typing from '../../../../components/Input/Typing';
import {gameCss} from '../../styles/styles';
import RenderItem from '../FlatList/renderItem';
const listComments = [
  {
    id: 1,
    name: 'Thành',
    content: 'Thank you, im just kidding',
    avatar:
      'https://khoinguonsangtao.vn/wp-content/uploads/2022/02/anh-dai-dien-fb-dep.jpg',
  },
  {
    id: 2,
    name: 'Hoàn',
    content: 'Maybe A',
    avatar:
      'https://cdn.lazi.vn/storage/uploads/users/avatar/1609811801_lazi_811139.jpg',
  },
  {
    id: 3,
    name: 'Phương',
    content: 'No, its B',
    avatar:
      'https://batterydown.vn/wp-content/uploads/2022/05/1_anh-avatar-dep-cho-con-gai.jpg',
  },
  {
    id: 4,
    name: 'Vân',
    content: 'Hey you guys, just watching',
    avatar:
      'https://upanh123.com/wp-content/uploads/2020/12/tai-anh-anime-ve-lam-avatar10.jpg',
  },
];
export default function Commnents() {
  return (
    <View style={gameCss.wrapperComments}>
      <View style={gameCss.Comments}>
        <FlatList
          data={listComments}
          keyExtractor={item => item.id}
          renderItem={RenderItem}
        />
      </View>
      <View style={gameCss.wrapperInput}>
        {/* TYPING INPUT */}
        <Typing placeHolder={'Type your comment....'} keyType="default" />
      </View>
    </View>
  );
}
