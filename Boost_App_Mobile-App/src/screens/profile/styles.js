import {StyleSheet, StatusBar} from 'react-native';
import {COLOR, COMMON, FONTSIZE} from '../../constants';

const dimensionUserImage = 140;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#959595',
  },
  wrapperHeader: {
    minHeight: 150,
    width: '100%',
  },
  borderW: {
    paddingVertical: 5,
    borderRadius: COMMON.radiusSecondary,
    borderWidth: 1,
    borderColor: COLOR.bgColor__Black,
    paddingHorizontal: 30,
    marginVertical: 5,
  },
  itemInfo: {
    flex: 1,
    minHeight: 50,
    borderRadius: COMMON.radiusSecondary,
    borderWidth: 1,
    borderColor: COLOR.bgColor__Black,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
  wrapperAll: {
    flex: 1,
    paddingHorizontal: COMMON.paddingHorizital,
    position: 'relative',
    borderTopRightRadius: COMMON.radiusSecondary,
    borderTopLeftRadius: COMMON.radiusSecondary,
    backgroundColor: COLOR.bgColor__White,
    paddingBottom: 20,
  },
  Header: {
    marginTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImages: {
    height: dimensionUserImage,
    width: dimensionUserImage,
    resizeMode: 'contain',
    borderRadius: Math.floor(dimensionUserImage / 2),
    marginBottom: 10,
    position: 'absolute',
    top: -Math.floor(dimensionUserImage / 2) - 20,
  },
  txtPrimary: {
    color: COLOR.txtColor__Black,
    fontSize: FONTSIZE.textFontSecondary,
    fontWeight: 'bold',
    // marginBottom: 5,
  },
  Wrapper_Some_Info: {
    minHeight: 70,
    width: '100%',
    flexDirection: 'column',
    marginTop: 5,
  },
  itemColumn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionConnect: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: COMMON.radiusTertiary,
  },
  btnLogout: {
    flexDirection: 'row',
    height: 50,
    flex: 1,
    backgroundColor: COLOR.bgColor__Main,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
});

export {styles as profileCss};
