import React from 'react';
import {Animated} from 'react-native';
import {FakeQuestions} from '~dummyData/';

export default function useGame(roomID) {
  const questionRooms = FakeQuestions.filter(m => m.roomId === roomID);
  const allQuestions = questionRooms[0].questions;
  //   state for count down - 15s demo
  const [countDown, setCountDown] = React.useState(6);
  const [visible, setVisible] = React.useState(false);
  const [correctOption, setCorrectOption] = React.useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = React.useState(false);
  //   all question filter by RoomID
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = React.useState(
    null,
  );
  //   state for progress
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    let ref = setInterval(() => {
      if (countDown > 0) {
        setCountDown(countDown - 1);
      } else {
        setCountDown(0);
        setVisible(!visible);
      }
    }, 1000);
    return () => {
      clearInterval(ref);
    };
  }, [countDown]);
  return [
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
  ];
}
