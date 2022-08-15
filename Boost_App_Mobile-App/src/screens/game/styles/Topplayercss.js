import {StyleSheet} from 'react-native';
import {COLOR, COMMON, FONTSIZE} from '~constants';
const constantsAvatar = {
  height: 100,
  width: 100,
  borderRadius: 50,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.bgColor__Game,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: COMMON.paddingHorizital,
  },
  sectionStatus: {
    width: '100%',
    minHeight: 30,
    alignItems: 'center',
    marginTop: COMMON.spaceItem,
    padding: 10,
    borderRadius: COMMON.radiusPrimary,
    borderWidth: 1,
    borderColor: COLOR.bgColor__Black,
    backgroundColor: COLOR.bgColor__Main,
  },
  txtCongra: {
    fontSize: FONTSIZE.textFontTertiary,
    color: COLOR.txtColor__White,
    fontWeight: 'bold',
  },
  section_show_top: {
    minHeight: 50,
    width: ' 100%',
    marginTop: COMMON.spaceItem,
    paddingHorizontal: COMMON.paddingHorizital,
    borderRadius: COMMON.radiusPrimary,
    borderWidth: 1,
    borderColor: COLOR.bgColor__Black,
    paddingBottom: 100,
    paddingTop: 15,
    backgroundColor: COLOR.bgColor__Box_1,
  },
  sectionRow: {
    flexDirection: 'row',
  },
  sectionRound: {
    height: constantsAvatar.height,
    width: constantsAvatar.width,
    position: 'relative',
    marginBottom: COMMON.spaceItem,
  },
  txtPrimary: {
    fontSize: FONTSIZE.textFontTertiary,
    color: COLOR.txtColor__White,
    fontWeight: 'bold',
  },
  txtRank: {
    position: 'absolute',
    height: 30,
    minWidth: 30,
    backgroundColor: COLOR.bgColor__Main,
    textAlign: 'center',
    borderRadius: 15,
  },
  avatar: {
    height: constantsAvatar.height,
    width: constantsAvatar.width,
    borderRadius: constantsAvatar.borderRadius,
    resizeMode: 'contain',
  },
  txtSecondary: {
    fontSize: FONTSIZE.textFontTertiary,
    color: COLOR.txtColor__Black,
    fontWeight: 'bold',
  },
  txtUser: {
    position: 'absolute',
    bottom: Math.floor(-constantsAvatar.height / 2 + 15),
    left: Math.floor(constantsAvatar.width / 2 - FONTSIZE.textFontTertiary - 2),
  },
  points: {
    position: 'absolute',
    bottom: Math.floor(-constantsAvatar.height / 2 - 25),
    left: Math.floor(
      constantsAvatar.width / 2 - FONTSIZE.textFontTertiary - 10,
    ),
    padding: 10,
    backgroundColor: COLOR.bgColor__Main,
    borderRadius: COMMON.radiusPrimary,
  },
  txtTertiary: {
    color: COLOR.txtColor__White,
    fontSize: FONTSIZE.textFontSmall,
    fontWeight: '400',
  },
  sectionSwipe: {
    minHeight: 20,
    width: '100%',
    alignItems: 'center',
    marginTop: COMMON.spaceItem,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export {styles as TopPlayerCss};
