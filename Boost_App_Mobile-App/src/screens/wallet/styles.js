import {StyleSheet, StatusBar} from 'react-native';
import {COLOR, COMMON, FONTSIZE} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.bgColor__White,
  },
  Header: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: COLOR.bgColor__Main,
    borderBottomLeftRadius: COMMON.radiusSecondary,
    borderBottomRightRadius: COMMON.radiusSecondary,
    shadowColor: COLOR.bgColor__Black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.5,
    elevation: 4,
  },
  Body: {
    flex: 1,
    paddingHorizontal: COMMON.paddingHorizital,
  },
  navBar: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  txtHeader: {
    fontSize: FONTSIZE.textFontQuaternary,
    fontWeight: 'bold',
    color: COLOR.txtColor__White,
    textAlign: 'center',
  },
  wrapperToken: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperActions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: COMMON.spaceItem,
  },
  txtToken2: {
    fontSize: FONTSIZE.textFontPrimary,
    fontWeight: 'bold',
    color: COLOR.txtColor__White,
    borderWidth: 1,
    borderColor: COLOR.bgColor__White,
    borderRadius: COMMON.radiusPrimary,
    padding: 5,
    marginTop: COMMON.spaceItem,
  },
  Icons: {
    minHeight: 50,
    alignItems: 'center',
  },
  action: {
    minHeight: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: COMMON.radiusSecondary,
    borderWidth: 1,
    backgroundColor: COLOR.bgColor__Box_2,
  },
  txtPrimary: {
    marginTop: 3,
    color: COLOR.txtColor__White,
    fontWeight: '600',
    fontSize: FONTSIZE.textFontPrimary,
    textTransform: 'capitalize',
  },
  txtSecondary: {
    marginTop: COMMON.spaceItem,
    color: COLOR.txtColor__White,
    fontWeight: 'bold',
    fontSize: FONTSIZE.textFontQuaternary,
    // textTransform: 'capitalize',
  },
  wrapperBalance: {
    borderRadius: COMMON.radiusPrimary,
    borderWidth: 1,
    backgroundColor: COLOR.bgColor__White,
    marginTop: COMMON.spaceItem / 2,
  },
  devide: {
    width: '100%',
    height: 1,
    backgroundColor: COLOR.bgColor__Black,
  },
  wrappeNFTs: {
    marginTop: COMMON.spaceItem / 2,
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    marginBottom: 10,
    justifyContent: 'space-between',
  },

  wapperDialog: {
    minHeight: 300,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: COMMON.paddingHorizital,
    paddingVertical: COMMON.paddingHorizital,
    backgroundColor: COLOR.bgColor__Main,
    borderRadius: COMMON.radiusSecondary,
  },
  dialogHeader: {
    minHeight: 50,
    width: '100%',
    flexDirection: 'row',
    position: 'relative',
  },
  btnClose: {
    position: 'absolute',
    right: 0,
  },
  txtTitle: {
    width: 150,
    textAlign: 'center',
    fontSize: FONTSIZE.textFontSecondary,
    fontWeight: 'bold',
    color: COLOR.txtColor__White,
  },
  wrapperContent: {
    marginTop: 10,
    width: '95%',
    minHeight: 200,
    backgroundColor: COLOR.bgColor__Main_2,
    borderRadius: COMMON.radiusSecondary,
    padding: 10,
  },
  wrapperItems: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  walletIcons: {
    width: 30,
    height: 30,
    borderRadius: 15,
    resizeMode: 'contain',
  },
  wrapperFlex: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export {styles as walletCss};
