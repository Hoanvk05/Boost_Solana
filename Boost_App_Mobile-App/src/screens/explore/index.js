import React from 'react';
import {
  View,
  Text,
  Animated,
  Easing,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Svg, {G, Circle, Rect} from 'react-native-svg';
import {COLOR, COMMON} from '../../constants';
import TopBarNavigation from '../../navigation/tab/top';
import Header from '../../components/Header';
import {exploreCss} from './styles';
import DiaLog from '../../components/Dialog';
// import {DiaLogActions, DiaLogBody} from '../home/components/Dialog';
import Taskprogress from './components/list/taskProgress';
import {Context, fakeCates} from '~context/gameContext';
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
const Radius = 50;

export default function Explore({
  percentage = 75,
  radius = Radius,
  strokeWidth = 10,
  duration = 500,
  color = COLOR.bgColor__White,
  delay = 0,
  textColor,
  max = 100,
}) {
  //state for show dialog
  const [visible, setVisible] = React.useState(false);
  // STATE FOR CATEGORIES CHOOSE
  const context = React.useContext(Context);
  // const [category, context.setCategory] = React.useState({
  //   active: 1,
  //   arrayActive: fakeCates,
  // });
  const handleToggle = id => {
    context.setCategory({...context.category, active: id});
  };
  // HANDLE ANIMATION FOR PROGRESS
  const [input, setInput] = React.useState('');
  const handleChangeText = text => setInput(text);
  const animated = React.useRef(new Animated.Value(0)).current;
  const circleRef = React.useRef();
  const inputRef = React.useRef();
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;
  const animation = toValue => {
    return Animated.timing(animated, {
      delay: 1000,
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start(() => {
      animation(toValue === 0 ? percentage : 0);
    });
  };
  const handleShow = () => setVisible(!visible);
  // React.useEffect(() => {
  //   animation(percentage);
  //   animated.addListener(
  //     v => {
  //       const maxPerc = (100 * v.value) / max;
  //       const strokeDashoffset =
  //         circumference - (circumference * maxPerc) / 100;
  //       if (inputRef?.current) {
  //         inputRef.current.setNativeProps({
  //           text: `${Math.round(v.value)}%`,
  //         });
  //       }
  //       if (circleRef?.current) {
  //         circleRef.current.setNativeProps({
  //           strokeDashoffset,
  //         });
  //       }
  //     },
  //     [max, percentage],
  //   );

  //   return () => {
  //     animated.removeAllListeners();
  //   };
  // });
  return (
    <View style={exploreCss.container}>
      {/* Header */}
      <Header />
      <View
        style={{
          minHeight: 50,
          width: '100%',
          paddingHorizontal: COMMON.paddingHorizital,
        }}
      >
        <View style={exploreCss.itemRow}>
          <View style={exploreCss.sectionProgress}>
            <Svg
              height={radius * 2}
              width={radius * 2}
              viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
            >
              <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
                <Circle
                  ref={circleRef}
                  cx="50%"
                  cy="50%"
                  r={radius}
                  // fill="transparent"
                  stroke={color}
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                  // strokeDashoffset={circumference}
                  // strokeDasharray={circumference}
                  strokeOpacity="0.1"
                />
                <Circle
                  cx="50%"
                  cy="50%"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference / 2}
                  r={radius}
                  fill="transparent"
                  stroke={color}
                  strokeWidth={strokeWidth}
                  strokeLinejoin="round"
                  strokeOpacity="1"
                />
              </G>
            </Svg>
            <AnimatedTextInput
              ref={inputRef}
              underlineColorAndroid="transparent"
              editable={false}
              defaultValue="50%"
              style={exploreCss.text}
            />
          </View>
          <View style={exploreCss.content}>
            <Text style={exploreCss.txtSecondary}>Daily Progress</Text>
            <TouchableOpacity
              activeOpacity={COMMON.activeOpacity}
              onPress={handleShow}
            >
              <Text style={exploreCss.txtPrimary}>
                Complete to receive rewards
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={exploreCss.categories}>
        <Text style={{...exploreCss.txtPrimary, color: COLOR.txtColor__Main}}>
          Categories
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={exploreCss.List}
        >
          {fakeCates.map(item => (
            <TouchableOpacity
              onPress={() => handleToggle(item.id)}
              key={item.id}
              style={{
                ...exploreCss.itemColumn,
                borderColor:
                  context.category.active === item.id
                    ? COLOR.bgColor__Main
                    : 'transparent',
              }}
            >
              <View style={exploreCss.Card}>{item.icon}</View>
              <Text style={exploreCss.txtTertiary}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      {/* TOPBAR */}
      <View style={exploreCss.secTopTab}>
        <TopBarNavigation type={context.category.active} />
      </View>
      <DiaLog
        visible={visible}
        onShow={setVisible}
        title={'Check'}
        bodyChildren={<Taskprogress />}
      />
    </View>
  );
}
