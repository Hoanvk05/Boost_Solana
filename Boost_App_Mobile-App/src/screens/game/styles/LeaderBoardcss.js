import {StyleSheet} from 'react-native';
import {COLOR, COMMON, FONTSIZE} from '~constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.bgColor__Game,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: COMMON.paddingHorizital,
  },
  userRank: {
    flexDirection: 'row',
    minHeight: 65,
    width: '100%',
    borderRadius: COMMON.radiusSecondary,
    borderWidth: 1,
    borderColor: COLOR.bgColor__White,
    marginTop: COMMON.spaceItem,
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: COLOR.bgColor__White,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    resizeMode: 'contain',
    marginHorizontal: 8,
  },
  txtPrimary: {
    color: COLOR.txtColor__Black,
    fontSize: FONTSIZE.textFontPrimary,
    fontWeight: '400',
  },
  section_board: {
    maxHeight: 420,
    width: '100%',
  },
});
export {styles as LeaderBoardCss};
