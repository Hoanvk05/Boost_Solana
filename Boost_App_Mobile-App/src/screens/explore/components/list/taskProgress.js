import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLOR, COMMON, FONTSIZE, SIZEICONS} from '../../../../constants';
const Faketasks = [
  {
    id: 1,
    title: 'First win of the day',
    status: 'done',
  },
  {
    id: 2,
    title: 'Play one match',
    status: 'done',
  },
  {
    id: 3,
    title: 'Watch one match',
    status: 'done',
  },
  {
    id: 4,
    title: 'Play one Tournament',
    status: 'done',
  },
  {
    id: 5,
    title: 'Placed in Top 3',
    status: 'pending',
  },
];
export default function Taskprogress() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {Faketasks.map(item => (
        <View key={item.id} style={styles.secItem}>
          {item.status === 'done' ? (
            <AntDesign
              name="checkcircle"
              color={COLOR.bgColor__Black}
              size={SIZEICONS.sizeIcon_Secondary}
            />
          ) : (
            <Entypo
              name="circle"
              color={COLOR.bgColor__Black}
              size={SIZEICONS.sizeIcon_Secondary}
            />
          )}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              overflow: 'hidden',
            }}
          >
            <Text
              style={{
                ...styles.txtPrimary,
                textDecorationLine:
                  item.status === 'done' ? 'line-through' : 'none',
              }}
            >
              {item.title}
            </Text>
            <View style={styles.wraperPoints}>
              <Text style={{marginLeft: 5}}>+3</Text>
            </View>
          </View>
        </View>
      ))}
      <View style={{height: 50}}></View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    minHeight: 250,
    backgroundColor: COLOR.bgColor__White,
    padding: COMMON.paddingHorizital,
    minHeight: 50,
    borderRadius: COMMON.radiusSecondary,
  },
  secItem: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  txtPrimary: {
    color: COLOR.txtColor__Black,
    fontSize: FONTSIZE.textFontPrimary,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  wraperPoints: {
    borderWidth: 1,
    padding: 5,
    borderColor: COLOR.bgColor__Black,
    borderRadius: COMMON.radiusTertiary,
    marginRight: COMMON.spaceItem - 10,
  },
});
