import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLOR, SIZEICONS} from '../../../constants';
import Commnents from '../components/Comment';
import Header from '../components/Header';
import {TopPlayerCss} from '../styles/Topplayercss';
import {default as CirleRank} from '../components/Rank/ItemCircle';
import StatusBar from '../components/StatusBar';
const FakeImgs = {
  avatar1:
    'https://scontent.fhan14-1.fna.fbcdn.net/v/t1.15752-9/292397197_380256194260797_6389557924948728034_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=YF-xF3nrgp8AX-aOlxs&_nc_ht=scontent.fhan14-1.fna&oh=03_AVIMXnANP1IRUa5VNWZ721cBY4yRzdLoTxiWeBIc1qO05w&oe=6320BBFD',
  avatar2:
    'https://elead.com.vn/wp-content/uploads/2020/04/anh-dai-dien-facebook-18.jpg',
  avatar3:
    'https://chrissiemanby.com/anh-dai-dien-facebook-y-nghia/imager_8_2114_700.jpg',
};
export default function TopPlayer() {
  const navigation = useNavigation();
  const handleBack = () => navigation.popToTop();
  return (
    <View style={TopPlayerCss.container}>
      <Header title={'TEST'} onNavigate={handleBack} />
      <View style={TopPlayerCss.wrapper}>
        <StatusBar text={'Congratulations'} />
        <View style={TopPlayerCss.section_show_top}>
          <View style={{...TopPlayerCss.sectionRound, alignSelf: 'center'}}>
            <CirleRank
              rank="1"
              avatar={FakeImgs.avatar1}
              username="Mikah"
              points={1025}
            />
          </View>
          <View
            style={{
              ...TopPlayerCss.sectionRow,
              justifyContent: 'space-between',
            }}
          >
            <View style={TopPlayerCss.sectionRound}>
              <CirleRank
                rank="2"
                avatar={FakeImgs.avatar2}
                username="User2"
                points={1002}
              />
            </View>
            <View style={TopPlayerCss.sectionRound}>
              <CirleRank
                rank="3"
                avatar={FakeImgs.avatar3}
                username="User3"
                points={921}
              />
            </View>
          </View>
        </View>
        <View style={TopPlayerCss.sectionSwipe}>
          <Text
            style={{
              ...TopPlayerCss.txtPrimary,
              color: COLOR.txtColor__White,
              marginRight: 10,
            }}
          >
            SWIPE FOR DETAIL
          </Text>
          <AntDesign
            name="doubleright"
            size={SIZEICONS.sizeIcon_Tertiary}
            color={COLOR.bgColor__White}
          />
        </View>
        {/* LIST COMMENT */}
        <Commnents />
      </View>
    </View>
  );
}
