import {Dimensions, StyleSheet} from 'react-native';
import {COLOR, FONTSIZE, COMMON} from '../../../constants';

const {width} = Dimensions.get('window');
const iconDimension = 30;
const minHeightWrapperQuestion = 350;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.bgColor__Game,
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    minHeight: COMMON.NavbarHeight,
    backgroundColor: COLOR.bgColor__White,
    shadowColor: COLOR.bgColor__Black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 8,
    backgroundColor: COLOR.bgColor__Main,
  },
  StartIn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtPrimary: {
    fontSize: FONTSIZE.textFontSecondary,
    color: COLOR.txtColor__White,
    fontWeight: 'bold',
  },
  txtSecondary: {
    fontSize: FONTSIZE.textFontPrimary,
    color: COLOR.txtColor__White,
    fontWeight: 'bold',
  },
  Wrapper: {
    flex: 1,
  },
  ItemContainer: {
    flex: 1,
    padding: 15,
  },
  Title: {
    maxHeight: 130,
    width: '100%',
  },
  wrapperProgress: {
    marginTop: COMMON.spaceItem,
    height: COMMON.heightCountDown,
    width: '100%',
    borderWidth: 1,
    borderRadius: COMMON.radiusPrimary,
    borderColor: COLOR.bgColor__Black,
    position: 'relative',
  },
  currentProcess: {
    height: '100%',
    width: '70%',
    backgroundColor: COLOR.bgColor__Main,
    borderRadius: COMMON.radiusPrimary,
  },
  txtCurrentProcess: {
    color: COLOR.txtColor__White,
    top: Math.floor(COMMON.heightCountDown / 2) - FONTSIZE.textFontPrimary,
    left: '48%',
  },
  wrapperQuestion: {
    marginTop: COMMON.spaceItem,
    minHeight: minHeightWrapperQuestion,
    width: '100%',
    borderRadius: COMMON.radiusSecondary,
    // backgroundColor: '#525E75',
  },
  txtCountdown: {
    fontSize: FONTSIZE.textFontQuaternary,
    color: COLOR.txtColor__White,
    fontWeight: 'bold',
  },
  wrapperItems: {
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 50,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: COMMON.paddingHorizital,
  },
  listStreak: {
    marginTop: COMMON.spaceItem,
    flexBasis: '30%',
    height: 50,
    borderRadius: COMMON.radiusTertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperComments: {
    marginTop: COMMON.spaceItem,
    flex: 1,
    marginBottom: COMMON.spaceItem,
    // borderWidth: 1,
    // borderColor: COLOR.bgColor__Black,
    borderRadius: COMMON.radiusSecondary,
  },
  Comments: {
    flex: 1,
    marginTop: 5,
  },
  wrapperInput: {
    minHeight: 50,
    width: '100%',
    padding: 10,
    // borderRadius: COMMON.radiusPrimary,
  },
  avatar: {
    height: 25,
    width: 25,
    borderRadius: 12,
    resizeMode: 'contain',
    marginRight: 10,
  },
  itemRow: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  wrapperTotalPoints: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    left: Math.floor(width / 2) - (iconDimension + COMMON.radiusSecondary + 5),
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: COLOR.bgColor__White,
    borderRadius: COMMON.radiusTertiary,
  },
  iconPoints: {
    height: iconDimension,
    width: iconDimension,
    borderRadius: COMMON.radiusSecondary,
    resizeMode: 'contain',
    marginRight: COMMON.spaceItem,
  },
  wapprerPoints: {
    top: Math.floor(minHeightWrapperQuestion / 3 + 10),
    left: Math.floor(width / 2) - (iconDimension + COMMON.radiusSecondary + 5),
    backgroundColor: COLOR.bgColor__Box_2,
    borderWidth: 0,
  },
});
export {styles as gameCss};
