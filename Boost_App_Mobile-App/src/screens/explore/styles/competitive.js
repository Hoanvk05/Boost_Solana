import {StyleSheet} from 'react-native';
import {COLOR, COMMON, FONTSIZE} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.bgColor__Main,
  },
  Box: {
    minHeight: 100,
    width: '100%',
    marginVertical: COMMON.spaceItem / 2,
    backgroundColor: COLOR.bgColor__Button_1,
    borderRadius: COMMON.radiusPrimary,
    shadowColor: COLOR.bgColor__Black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    padding: 16,
  },
  txtSecondary: {
    fontSize: 12,
    fontWeight: '400',
    color: COLOR.txtColor__White,
  },
  avatarList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    resizeMode: 'contain',
    borderWidth: 1,
    borderColor: COLOR.bgColor__Black,
  },
  txtPrimary: {
    fontSize: FONTSIZE.textFontTertiary,
    fontWeight: 'bold',
    color: COLOR.txtColor__White,
    textAlign: 'center',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actions: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 40,
    minWidth: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: COLOR.bgColor__Main,
  },
});
export {styles as competitiveCss};
