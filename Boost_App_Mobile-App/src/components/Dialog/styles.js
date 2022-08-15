import {StyleSheet} from 'react-native';
import {COLOR, COMMON, FONTSIZE, SIZEICONS} from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: '85%',
    minHeight: 200,
    backgroundColor: COLOR.bgColor__White,
    borderRadius: COMMON.radiusSecondary,
    padding: -10,
  },
  wrapperTitle: {
    position: 'relative',
    minHeight: 100,
    width: '100%',
    backgroundColor: COLOR.bgColor__Main,
    shadowColor: COLOR.bgColor__Black,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.27,
    shadowRadius: 3,
    elevation: 10,
    borderRadius: COMMON.radiusSecondary,
    padding: 10,
  },
  txtPrimary: {
    color: COLOR.txtColor__White,
    fontWeight: '900',
    fontSize: FONTSIZE.textFontQuaternary,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  secTitle: {
    minHeight: 200,
    width: '100%',
    padding: COMMON.paddingHorizital,
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  wrapperInfo: {
    position: 'absolute',
    alignSelf: 'center',
    height: 80,
    width: 270,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: COLOR.bgColor__White,
    borderRadius: COMMON.radiusTertiary,
    shadowColor: COLOR.bgColor__Black,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.27,
    shadowRadius: 3,
    elevation: 10,
    bottom: -40,
    zIndex: 10,
    elevation: 10,
  },
  info: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 90,
  },
  info_2: {
    height: '100%',
    minWidth: 90,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: COLOR.bgColor__Black,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 7,
  },
  divider: {
    marginTop: 80,
  },
  txtSecondary: {
    color: COLOR.txtColor__Black,
    fontWeight: '900',
    fontSize: FONTSIZE.textFontPrimary,
  },
  logo: {
    height: '100%',
    width: '40%',
    resizeMode: 'contain',
    transform: [{rotate: '15deg'}],
  },
  body: {
    minHeight: 70,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperActions: {
    marginTop: COMMON.spaceItem,
    flexDirection: 'row',
    paddingHorizontal: COMMON.paddingHorizital,
    paddingBottom: 10,
  },
});

export {styles as DiaLogCss};
