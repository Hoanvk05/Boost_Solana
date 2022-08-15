import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {COLOR, COMMON, SIZEICONS} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import Header from './components/header';
import {loginCss} from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const othersSignin = [
  {
    id: 1,
    name: 'facebook',
    Icon: (
      <AntDesign
        name="facebook-square"
        size={SIZEICONS.sizeIcon_Primary}
        color={COLOR.bgColor__Black}
      />
    ),
  },
  {
    id: 2,
    name: 'google',
    Icon: (
      <AntDesign
        name="google"
        size={SIZEICONS.sizeIcon_Primary}
        color={COLOR.bgColor__Black}
      />
    ),
  },
  {
    id: 3,
    name: 'apple',
    Icon: (
      <AntDesign
        name="apple1"
        size={SIZEICONS.sizeIcon_Primary}
        color={COLOR.bgColor__Black}
      />
    ),
  },
];
export default function Login() {
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(true);
  const handleSubmit = () => navigation.replace('Tab');
  return (
    <View style={loginCss.Container}>
      {/* đây là phân đầu */}
      <Header />
      <View style={loginCss.SectionInput}>
        <Text style={loginCss.txtInput}>Email / Số điện thoại</Text>
        <TextInput
          // value={values.UserName}
          placeholder="Nhập Email / Số điện thoại"
          style={loginCss.Input}
          keyboardType="name-phone-pad"
        />
        <Text style={loginCss.txtInput}>Mật khẩu</Text>
        <View style={loginCss.SectionPassword}>
          <TouchableOpacity
            style={loginCss.SectionVisible}
            onPress={() => setVisible(value => !value)}
          >
            {visible ? (
              <AntDesign
                name="eye"
                size={SIZEICONS.sizeIcon_Secondary}
                color={COLOR.bgColor__Black}
              />
            ) : (
              <Entypo
                name="eye-with-line"
                size={SIZEICONS.sizeIcon_Secondary}
                color={COLOR.bgColor__Black}
              />
            )}
          </TouchableOpacity>
          <TextInput
            placeholder="Nhập mật khẩu"
            secureTextEntry={visible}
            style={loginCss.Input}
          />
        </View>
        <View style={loginCss.SectionForgotPass}>
          <TouchableOpacity activeOpacity={COMMON.activeOpacity}>
            <Text
              style={{
                ...loginCss.txtCommon,
                color: COLOR.bgColor__Main,
                marginTop: 10,
              }}
            >
              Quên mật khẩu?
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handleSubmit}
          style={loginCss.btnLoginActive}
          activeOpacity={COMMON.activeOpacity}
        >
          <Text style={loginCss.txtLogin}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
      <View style={loginCss.Seperate}>
        <View style={loginCss.HalfLine}></View>
        <Text style={{marginHorizontal: 10}}>Hoặc</Text>
        <View style={loginCss.HalfLine}></View>
      </View>
      <View style={loginCss.SectionOthers}>
        {othersSignin.map(item => (
          <TouchableOpacity key={item.id} activeOpacity={COMMON.activeOpacity}>
            {item.Icon}
          </TouchableOpacity>
        ))}
      </View>
      <View style={loginCss.SectionBtn_register}>
        <Text style={loginCss.txtCommon}>Bạn mới biết đến Boots?</Text>
        <TouchableOpacity activeOpacity={COMMON.activeOpacity}>
          <Text
            style={[
              loginCss.txtCommon,
              {color: COLOR.bgColor__Main, marginLeft: 5},
            ]}
          >
            Đăng ký
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
