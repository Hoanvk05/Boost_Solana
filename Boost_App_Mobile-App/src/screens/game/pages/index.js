import React from 'react';
import {View, Text, ScrollView, Animated, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';
import {gameCss} from '../styles/styles';
import ProgressBar from '../components/Progress';
import ButtonChoose from '../components/Button';
import Commnents from '../components/Comment';
import Streak from '../components/Streak';
import {useDispatch} from 'react-redux';
import {increasePoints} from '~redux/slices/pointsSlice';
import useGame from '~hooks/useGame';
import {small__logo_point, WALLET_8} from '~constants/images';
import {COLOR} from '~constants';
import {Context} from '~context/gameContext';
import {COMMON} from '~constants/';

const time = 4;
export default function Game(Props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleBack = () => navigation.popToTop();
  const {roomID, roomName} = Props.route.params;

  // all state - hooks
  const [
    allQuestions,
    countDown,
    visible,
    correctOption,
    setCorrectOption,
    isOptionsDisabled,
    setIsOptionsDisabled,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    currentOptionSelected,
    setCurrentOptionSelected,
    progress,
    value,
    setValue,
  ] = useGame(roomID);
  //   debounces
  const timeOut = React.useRef();
  const progressAnim = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });
  const context = React.useContext(Context);
  // animation opacity for increase points
  const [isIncrease, setIsIncrease] = React.useState(false);
  const opacityRef = React.useRef(new Animated.Value(0));
  const opacityAnimation = opacityRef.current.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  // add listener progress bar
  progress.addListener(({value}) => {
    if (value === 1) {
      handleNext();
    }
    setValue(value);
  });
  React.useLayoutEffect(() => {
    if (countDown === 0 && value === 0) {
      animationNext();
    }
  }, [countDown, value]);
  const animationNext = () => {
    Animated.timing(progress, {
      toValue: 1,
      duration: time * 1000,
      useNativeDriver: false,
    }).start();
  };
  const animationReset = () => {
    Animated.timing(progress, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };
  const validateAnswer = selectedOption => {
    let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if (correct_option === selectedOption) {
      setIsIncrease(true);
      setTimeout(() => setIsIncrease(false), 1000);
    }
    if (currentQuestionIndex == allQuestions.length - 1) {
      navigation.navigate('Swipe');
    }
    if (selectedOption == correct_option) {
      // Set Score
      dispatch(increasePoints(25));
    }
    // streaming user live
    context.handleDecreaseUser();
    context.handleDecreasePlayer();
    // reset progress
    clearTimeout(timeOut.current);
    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }
    timeOut.current = setTimeout(() => {
      handleNext();
    }, 1000);
  };
  const handleNext = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      // Last Question
      // Show Score Modal
      if (timeOut.current) {
        clearTimeout(timeOut.current);
      }
      setValue(null);
      Animated.timing(progress).stop();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      // streaming
      context.setCurrentQuestion(currentQuestionIndex + 2);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      animationReset();
    }
  };
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    dispatch(increasePoints(25));

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
  };
  return (
    <View style={gameCss.container}>
      {/* HEADER */}
      <Header title={roomName} onNavigate={handleBack} />
      <View style={gameCss.Wrapper}>
        <View style={{paddingHorizontal: COMMON.paddingHorizontal}}>
          {/* PROGRESS BAR */}
          <ProgressBar animation={progressAnim} />
          {/*  */}
          <View style={gameCss.wrapperQuestion}>
            {!visible ? (
              <View style={gameCss.StartIn}>
                <Text style={gameCss.txtCountdown}>START IN</Text>
                {countDown <= 6 && countDown >= 1 ? (
                  <Text style={gameCss.txtCountdown}>
                    00:
                    {countDown - 1 < 10 ? '0' + (countDown - 1) : countDown - 1}
                  </Text>
                ) : (
                  <Text style={gameCss.txtCountdown}>GO</Text>
                )}
              </View>
            ) : (
              <View style={gameCss.ItemContainer}>
                <ScrollView style={gameCss.Title}>
                  <Text
                    style={{
                      ...gameCss.txtPrimary,
                      overflow: 'scroll',
                    }}
                  >
                    {allQuestions[currentQuestionIndex]?.question}
                  </Text>
                </ScrollView>
                {allQuestions[currentQuestionIndex]?.options.map(
                  (item, index) => (
                    <View
                      key={index.toString()}
                      style={{height: 40, marginVertical: 3}}
                    >
                      <ButtonChoose
                        isDisable={isOptionsDisabled}
                        onPress={() => validateAnswer(item)}
                        option={item}
                        currentOptionSelected={currentOptionSelected}
                        correctOption={correctOption}
                      />
                    </View>
                  ),
                )}
                {isIncrease && (
                  <View
                    style={[gameCss.wrapperTotalPoints, gameCss.wapprerPoints]}
                  >
                    <Image source={WALLET_8} style={gameCss.iconPoints} />
                    <Text
                      style={{
                        ...gameCss.txtPrimary,
                        color: COLOR.txtColor__Black,
                      }}
                    >
                      +25
                    </Text>
                  </View>
                )}
              </View>
            )}
          </View>
          {/* LIST STREAK */}
          <Streak />
        </View>
        {/* LIST COMMENT */}
        <Commnents />
      </View>
      {/* <ShowModal
        isVisible={false}
        allQuestions={allQuestions}
        score={2}
        onPress={restartQuiz}
      /> */}
    </View>
  );
}
