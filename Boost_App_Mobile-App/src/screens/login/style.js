import {StyleSheet, Dimensions, StatusBar} from 'react-native';
import {COLOR} from '../../constants';
const {width, height} = Dimensions.get('window');

const radius = 5;
const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 18,
    height: '100%',
    position: 'relative',
  },
  SectionHeader: {
    width: '100%',
    // marginTop: StatusBar.currentHeight,
  },
  Loading: {
    position: 'absolute',
    top: height / 3,
    left: width / 3,
    height: 100,
    width: 100,
    zIndex: 10,
    elevation: 10,
    transform: [{scale: 1}],
  },
  txtInput: {
    marginVertical: 10,
    color: COLOR.bgColor__Black,
    fontSize: 15,
    lineHeight: 16,
    fontWeight: '400',
  },
  txtTitle: {
    fontWeight: 'bold',
    color: COLOR.txtColor__Black,
    fontSize: 32,
    lineHeight: 34,
    marginLeft: 7,
  },
  SectionForgotPass: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  SectionNotice: {
    width: '100%',
    alignItems: 'center',
  },
  SectionBtn_register: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 200,
  },
  txtCommon: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 15,
    color: COLOR.txtColor__Black,
  },
  SectionInput: {
    marginTop: 30,
  },
  Input: {
    height: 50,
    borderRadius: radius,
    borderWidth: 1,
    borderColor: COLOR.bgColor__Black,
    padding: 16,
  },
  Icon: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  Notice: {
    fontSize: 15,
    lineHeight: 16,
    color: COLOR.bgColor__Black,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 16,
    width: '85%',
  },
  SectionVisible: {
    position: 'absolute',
    top: 15,
    right: 20,
    zIndex: 10,
  },
  btnLoginInActive: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: '100%',
    backgroundColor: COLOR.bgColor__Black,
    borderRadius: radius,
  },
  btnLoginActive: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: '100%',
    backgroundColor: COLOR.bgColor__Main,
    borderRadius: radius,
  },
  txtLogin: {
    fontSize: 16,
    lineHeight: 17,
    fontWeight: '600',
    color: COLOR.txtColor__White,
  },
  Seperate: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  HalfLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLOR.txtColor__Black,
  },
  SectionOthers: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ErrorText: {
    paddingVertical: 16,
    color: 'red',
    fontWeight: '400',
    fontSize: 16,
  },
});

// const styleF = StyleSheet.create({
//   Container: {
//     flex: 1,
//     backgroundColor: COLOR.txtColor__White,
//     paddingHorizontal: 16,
//   },
//   Header: {
//     minHeight: 100,
//     width: '100%',
//     alignItems: 'center',
//     marginVertical: 16,
//   },
//   image: {
//     height: 80,
//     width: 120,
//     resizeMode: 'contain',
//   },
//   txtTilte: {
//     color: COLOR.bgColor__Black,
//     fontSize: 15,
//     lineHeight: 16,
//     fontWeight: '500',
//     width: '90%',
//     textAlign: 'center',
//     marginVertical: 16,
//   },
//   btnNextActive: {
//     width: '100%',
//     height: 50,
//     backgroundColor: COLOR.bgColor__Main,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: radius,
//     marginTop: 32,
//   },
//   txtNext: {
//     fontSize: 16,
//     lineHeight: 16.8,
//     color: COLOR.txtColor__White,
//     fontWeight: '500',
//   },
//   Text: {
//     flexDirection: 'row',
//     marginTop: 20,
//     justifyContent: 'center',
//   },
//   txtCommon: {
//     fontSize: 14,
//     lineHeight: 14.7,
//     color: COLOR.bgColor__Black,
//     fontWeight: '400',
//   },
//   SectionBottomS: {
//     minHeight: 200,
//     width: '90%',
//     backgroundColor: COLOR.txtColor__White,
//     position: 'absolute',
//     left: 0.05 * width,
//     bottom: height / 3,
//     borderRadius: radius,
//     alignItems: 'center',
//     // padding: 16,
//   },
//   iconWarning: {
//     height: 40,
//     width: 40,
//   },
//   CycleIcon: {
//     height: 80,
//     width: 80,
//     borderRadius: radius,
//     backgroundColor: theme.lightOrgane,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: 8,
//   },
//   txtNoti: {
//     fontSize: 20,
//     lineHeight: 21,
//     fontWeight: 'bold',
//     color: COLOR.txtColor__Black,
//     marginVertical: 8,
//   },
//   Devide: {
//     width: '100%',
//     height: 1,
//     backgroundColor: COLOR.bgColor__Black,
//     marginVertical: 16,
//   },
//   txtAccept: {
//     fontSize: 16,
//     lineHeight: 16.8,
//     color: COLOR.bgColor__Main,
//     fontWeight: '700',
//   },
//   btnAccept: {
//     marginBottom: 16,
//   },
// });

export {styles as loginCss};
