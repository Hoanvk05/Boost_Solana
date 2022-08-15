import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, FlatList} from 'react-native';
import Commnents from '../components/Comment';
import userRank from '../components/FlatList/ListUser';
import Header from '../components/Header';
import StatusBar from '../components/StatusBar';
import {LeaderBoardCss} from '../styles/LeaderBoardcss';
const FakeBoard = [
  {
    id: 1,
    rank: '1ST',
    avatar:
      'https://scontent.fhan14-1.fna.fbcdn.net/v/t1.15752-9/292397197_380256194260797_6389557924948728034_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=YF-xF3nrgp8AX-aOlxs&_nc_ht=scontent.fhan14-1.fna&oh=03_AVIMXnANP1IRUa5VNWZ721cBY4yRzdLoTxiWeBIc1qO05w&oe=6320BBFD',
    points: 1245,
    username: 'Mikah Dang',
    color: '#FFEA11',
  },
  {
    id: 2,
    rank: '2ND',
    avatar:
      'https://thuthuatnhanh.com/wp-content/uploads/2019/12/avatar-deo-khau-trang.jpg',
    points: 1000,
    username: 'User 2',
    color: '#FA2FB5',
  },
  {
    id: 3,
    rank: '3RD',
    avatar: 'https://thienluc.vn/anh-dai-dien-dep/imager_25184.jpg',
    points: 900,
    username: 'User 3',
    color: '#A66CFF',
  },
  {
    id: 4,
    rank: '4TH',
    avatar:
      'https://allimages.sgp1.digitaloceanspaces.com/anhdep247net/2022/01/Hinh-anh-dai-dien-nguoi-giau-mat-bi-an-an.jpg',
    points: 1245,
    username: 'User 4',
  },
  {
    id: 5,
    rank: '5TH',
    avatar:
      'https://thiepnhanai.com/wp-content/uploads/2021/05/hinh-anh-dai-dien-dep-cho-nam-4.jpg',
    points: 1245,
    username: 'User 5',
  },
  {
    id: 6,
    rank: '6TH',
    avatar:
      'https://phunugioi.com/wp-content/uploads/2020/10/anh-dai-dien-nguoi-giau-mat-nam.jpg',
    points: 1245,
    username: 'User 6',
  },
  {
    id: 7,
    rank: '7TH',
    avatar:
      'https://thiepnhanai.com/wp-content/uploads/2021/05/hinh-anh-dai-dien-dep-cho-nam-5.jpg',
    points: 1245,
    username: 'User 7',
  },
];
export default function LeaderBoard() {
  const navigation = useNavigation();
  const handleBack = () => navigation.popToTop();

  return (
    <View style={LeaderBoardCss.container}>
      <Header title={'TEST'} onNavigate={handleBack} />
      <View style={LeaderBoardCss.wrapper}>
        <StatusBar text={'Leader Board'} />
        {/* Board */}
        <FlatList
          style={LeaderBoardCss.section_board}
          data={FakeBoard}
          keyExtractor={item => item.id}
          renderItem={userRank}
        />
        {/* List comment */}
        <Commnents />
      </View>
    </View>
  );
}
