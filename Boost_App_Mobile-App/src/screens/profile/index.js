import React from 'react';
import {View, Text, Image, Switch, ScrollView} from 'react-native';
import CardColumn from '~components/Card/CardColumn';
import {COLOR, SIZEICONS} from '~constants';
import DropDownPicker from 'react-native-dropdown-picker';
import BTNWidth from '~components/Button/BTNWidth';
import {profileCss} from './styles';
import usePoints from '~hooks/usePoints';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import RowItem from './components/rowItem';
import {fakeInfo} from '~components/Header';
import RenderItem from './components/renderItem';

// INIT CONSTANTS
const initConnectWith = ['Apple', 'Google', 'Facebook', 'Twitter'];
const initArrayChecked = [
  {
    id: 1,
    checkName: 'Invitation',
  },
  {
    id: 2,
    checkName: 'Live',
  },
];
const trackThemColor = '#F2F4F7';
// END
const dimensionUserImage = 140;
export default function Profile() {
  const [points] = usePoints();
  const [check, setChecked] = React.useState([]);
  // handle checked toogle butotn
  const toggleSwitch = id => {
    setChecked(prev => {
      const isCheck = check.includes(id);
      if (isCheck) {
        return check.filter(item => item !== id);
      } else return [...prev, id];
    });
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={profileCss.container}
    >
      <View style={profileCss.wrapperHeader}></View>
      <View style={profileCss.wrapperAll}>
        <View style={profileCss.Header}>
          <Image
            style={profileCss.userImages}
            source={{uri: fakeInfo.avatar}}
          />
          <Text
            style={{
              ...profileCss.txtPrimary,
              marginTop: Math.floor(dimensionUserImage / 2),
            }}
          >
            {fakeInfo.username}
          </Text>
          <Text style={[profileCss.txtPrimary, profileCss.borderW]}>Gold</Text>
        </View>
        <View style={profileCss.Wrapper_Some_Info}>
          <View style={{flexDirection: 'row', marginVertical: 16}}>
            <RowItem
              icon={
                <Entypo
                  name="medal"
                  size={SIZEICONS.sizeIcon_Secondary}
                  color={COLOR.bgColor__Black}
                />
              }
              title="Won"
              number={12}
            />
            <View style={{width: 35}}></View>
            <RowItem
              icon={
                <FontAwesome5
                  name="crown"
                  size={SIZEICONS.sizeIcon_Secondary}
                  color={COLOR.bgColor__Black}
                />
              }
              title="#1"
              number={1}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <RowItem
              icon={
                <FontAwesome
                  name="dollar"
                  size={SIZEICONS.sizeIcon_Secondary}
                  color={COLOR.bgColor__Black}
                />
              }
              title="Token A"
              number={100}
            />
            <View style={{width: 35}}></View>
            <RowItem
              icon={
                <FontAwesome
                  name="dollar"
                  size={SIZEICONS.sizeIcon_Secondary}
                  color={COLOR.bgColor__Black}
                />
              }
              title="Token B"
              number={100}
            />
          </View>
        </View>
        {/* CARD */}
        <CardColumn title="In-use">
          <DropDownPicker
            items={[
              {label: 'France', value: 'fr'},
              {label: 'Spain', value: 'es'},
            ]}
            placeholder="Math"
            defaultIndex={0}
            containerStyle={{height: 40}}
            onChangeItem={item => console.log(item.label, item.value)}
          />
        </CardColumn>
        <CardColumn title="Language">
          <DropDownPicker
            items={[
              {label: 'France', value: 'fr'},
              {label: 'Spain', value: 'es'},
            ]}
            placeholder="English"
            defaultIndex={0}
            containerStyle={{height: 40}}
            onChangeItem={item => console.log(item.label, item.value)}
          />
        </CardColumn>
        {/* CARD */}
        <CardColumn title="Notification">
          {initArrayChecked.map(item => (
            <View key={item.id} style={profileCss.itemRow}>
              <Text>{item.checkName}</Text>
              <Switch
                key={item.id}
                trackColor={trackThemColor}
                thumbColor={
                  check.includes(item.id)
                    ? COLOR.bgColor__Main
                    : COLOR.bgColor__White
                }
                ios_backgroundColor={COLOR.bgColor__Black}
                onValueChange={() => toggleSwitch(item.id)}
                value={check.includes(item.id)}
              />
            </View>
          ))}
        </CardColumn>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          {initConnectWith.map((item, index) => (
            <View key={index} style={{width: '49%', marginBottom: 10}}>
              <RenderItem key={index.toString()} item={item} index={index} />
            </View>
          ))}
        </View>
        {/* <CardColumn title="Connect with">
          <FlatList
            data={initConnectWith}
            keyExtractor={(_, index) => index.toString()}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              marginVertical: 5,
            }}
            renderItem={RenderItem}
          />
        </CardColumn> */}
        {/* ACTIONs */}
        <BTNWidth title={'LOGOUT'} />
      </View>
    </ScrollView>
  );
}
