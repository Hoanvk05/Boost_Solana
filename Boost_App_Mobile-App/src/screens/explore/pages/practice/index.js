import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLOR, COMMON, FONTSIZE} from '~constants';
import {Context} from '~context/gameContext';
import {FakeTypesOfPractice} from '~dummyData/';

export default function Practice() {
  const context = React.useContext(Context);
  const filterCategories = FakeTypesOfPractice.filter(
    item => item.id === context.category.active,
  );
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {filterCategories[0].subs.map(item => (
        <TouchableOpacity
          activeOpacity={COMMON.activeOpacity}
          key={item.id}
          style={{...styles.actions, backgroundColor: item.color}}
        >
          <Text style={styles.txtPrimary}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.bgColor__Main,
  },
  actions: {
    minHeight: 50,
    width: '100%',
    borderRadius: COMMON.radiusSecondary,
    backgroundColor: COLOR.bgColor__White,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: COMMON.spaceItem / 2,
  },
  txtPrimary: {
    fontSize: FONTSIZE.textFontTertiary,
    fontWeight: 'bold',
    color: COLOR.txtColor__White,
    textTransform: 'uppercase',
  },
});
