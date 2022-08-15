import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RoomBox from '~components/Box/Room';
import {COLOR, COMMON, SIZEICONS} from '~constants';
import {logo2} from '~constants/images';
import {FakeRoom} from '~dummyData';
import Header from './components/Header';
import {HomeCss} from './styles';
export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={HomeCss.container}>
      <View style={HomeCss.wrapper}>
        {/* HEADER */}
        <Header />
      </View>
      <View style={HomeCss.wrapperEarnMore}>
        <View
          style={{
            flexDirection: 'row',
            width: '80%',
            justifyContent: 'flex-end',
          }}
        >
          <Image source={logo2} style={HomeCss.logo} />
          <View style={HomeCss.sectionTitle}>
            <Text
              style={{
                ...HomeCss.txtPrimary,
                fontSize: 40,
                color: COLOR.txtColor__White,
              }}
            >
              Boost
            </Text>
            <Text style={{...HomeCss.txtPrimary, color: COLOR.txtColor__White}}>
              Something cool
            </Text>
            <TouchableOpacity style={HomeCss.Actions}>
              <Text
                style={{...HomeCss.txtPrimary, color: COLOR.txtColor__Main}}
              >
                Earn more
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={HomeCss.sectionList}>
        <View style={HomeCss.sectionGroup}>
          <Text style={{...HomeCss.txtPrimary, color: COLOR.txtColor__Main}}>
            Trending room
          </Text>
          <TouchableOpacity activeOpacity={COMMON.activeOpacity}>
            <Ionicons
              name="color-filter-outline"
              size={SIZEICONS.sizeIcon_Secondary}
              color={COLOR.bgColor__White}
            />
          </TouchableOpacity>
        </View>
        {/* ROOM BOX */}
        <FlatList
          data={FakeRoom}
          keyExtractor={item => item.roomID}
          renderItem={({item}) => (
            <RoomBox item={item} navigation={navigation} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
