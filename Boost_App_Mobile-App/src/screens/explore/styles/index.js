import {StyleSheet, StatusBar} from 'react-native';
import {COLOR, COMMON, FONTSIZE} from '../../../constants';

const Radius = 50;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.bgColor__White,
  },
  Header: {
    marginTop: StatusBar.currentHeight,
    minHeight: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: COMMON.paddingHorizital,
    overflow: 'hidden',
    position: 'relative',
  },
  sectionProgress: {
    position: 'relative',
    height: 80,
    width: 80,
    marginTop: COMMON.spaceItem,
  },
  secTopTab: {
    flex: 1,
    marginTop: COMMON.spaceItem,
    backgroundColor: COLOR.bgColor__Main,
    borderTopRightRadius: COMMON.radiusPrimary,
    borderTopLeftRadius: COMMON.radiusPrimary,
    padding: 16,
  },
  text: {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: FONTSIZE.textFontQuaternary,
    top: Radius - FONTSIZE.textFontQuaternary,
    left: Radius - FONTSIZE.textFontQuaternary,
    color: COLOR.txtColor__White,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: Math.floor(50 / 2),
    resizeMode: 'contain',
  },
  circle: {
    height: 25,
    width: 25,
    borderRadius: Math.floor(25 / 2),
    borderWidth: 1,
    borderColor: COLOR.bgColor__Black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperPoints: {
    transform: [{scale: 0.85}],
    paddingLeft: 10,
    flexDirection: 'row',
    paddingHorizontal: 4,
    borderWidth: 1,
    borderRadius: COMMON.radiusPrimary,
    borderColor: COLOR.bgColor__Main,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtSpace: {
    marginHorizontal: 5,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: COMMON.paddingHorizital,
    backgroundColor: COLOR.bgColor__Main,
    paddingBottom: 50,
    marginTop: COMMON.spaceItem,
    borderRadius: COMMON.radiusSecondary,
  },
  content: {
    flex: 1,
    marginLeft: 30,
  },
  txtPrimary: {
    color: COLOR.txtColor__White,
    fontWeight: 'bold',
    fontSize: FONTSIZE.textFontSecondary,
  },
  txtSecondary: {
    color: COLOR.txtColor__White,
    fontWeight: 'bold',
    fontSize: FONTSIZE.textFontQuaternary,
  },
  itemColumn: {
    marginRight: 10,
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    borderColor: 'transparent',
    alignItems: 'center',
    marginTop: COMMON.spaceItem,
  },
  Card: {
    height: 80,
    width: 80,
    alignItems: 'center',
    // backgroundColor: COLOR.bgColor__Box_2,
    marginBottom: 5,
  },
  categories: {
    minHeight: 100,
    width: '100%',
    marginTop: COMMON.spaceItem,
    paddingHorizontal: COMMON.paddingHorizital,
  },
  txtTertiary: {
    fontSize: FONTSIZE.textFontPrimary,
    fontWeight: '400',
    color: COLOR.txtColor__Black,
  },
  List: {
    minHeight: 50,
    flexDirection: 'row',
    width: '100%',
  },
});

export {styles as exploreCss};
