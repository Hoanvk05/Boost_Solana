import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {SIZEICONS, COLOR} from '../../../constants';
import {
  DiaLogBody,
  DiaLogActions,
  DiaLogHeader,
} from '../../../screens/home/components/Dialog';
import {HomeCss} from '../../../screens/home/styles';
import DiaLog from '../../Dialog';
const FakePrice = 255;
const touchOpacity = 0.6;
const fakeUserTracking = [
  {
    id: 1,
    avatar: 'https://sunglasshutusa.com/anh-dai-dien-dep-cho-nu/imager_44.jpg',
  },
  {
    id: 2,
    avatar:
      'https://1.bp.blogspot.com/-EQY_VEDP_W8/XrP7MqovMfI/AAAAAAAAkgI/czdquEtLc9MTb8jMQJOETRDXd7O91EIYgCLcBGAsYHQ/s1600/Avatar-Dep-Nu%2B%252812%2529.jpg',
  },
  {
    id: 3,
    avatar:
      'https://tophinhanh.com/wp-content/uploads/2021/12/anh-avatar-dep-cho-con-gai.jpg',
  },
];

export default function RoomBox({item}) {
  const [visible, setVisible] = React.useState(false);
  return (
    <View style={HomeCss.sectionItem}>
      <View style={HomeCss.itemRow}>
        <Text
          style={{
            ...HomeCss.txtPrimary,
            maxWidth: 170,
            flexWrap: 'wrap',
          }}
        >
          {item.roomName}
        </Text>
        <Text style={{...HomeCss.txtPrimary, color: COLOR.txtColor__Main}}>
          ${FakePrice}K
        </Text>
      </View>
      <View style={{...HomeCss.itemRow, width: 115}}>
        {fakeUserTracking.map((item, index) => (
          <Image
            key={item.id}
            source={{uri: item.avatar}}
            style={HomeCss.avatar}
          />
        ))}
        <Text style={HomeCss.txtMorePeople}>+999</Text>
      </View>
      <View
        style={{
          ...HomeCss.itemRow,
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        <Text
          style={{
            ...HomeCss.txtPrimary,
            color: COLOR.txtColor__Main,
            marginBottom: 6,
          }}
        >
          {item.streaming}
        </Text>
        <View style={HomeCss.actionsRoom}>
          <View style={{...HomeCss.itemRow, alignItems: 'center'}}>
            <TouchableOpacity activeOpacity={touchOpacity}>
              <FontAwesome
                name="heart"
                size={SIZEICONS.sizeIcon_Secondary}
                color={COLOR.Error}
              />
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={() => navigation.navigate('Game', item)}
              onPress={() => setVisible(!visible)}
              activeOpacity={touchOpacity}
              style={HomeCss.btnJoin}
            >
              <Text
                style={{
                  ...HomeCss.txtPrimary,
                  color: COLOR.txtColor__White,
                }}
              >
                View
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* DIALOG */}
      <DiaLog
        visible={visible}
        onShow={setVisible}
        title={item.roomName}
        headerChildren={
          <DiaLogHeader
            title={item.roomName}
            visible={visible}
            onShow={() => setVisible(!visible)}
          />
        }
        bodyChildren={<DiaLogBody />}
        buttonChildren={<DiaLogActions data={item} />}
      />
    </View>
  );
}
