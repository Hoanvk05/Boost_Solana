import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR} from '~constants/';
export const Context = React.createContext();
const initUserStreaming = 642;
const numberQuestion = 5;
export const fakeCates = [
  {
    id: 1,
    name: 'Math',
    icon: (
      <FontAwesome5 name="calculator" size={75} color={COLOR.bgColor__Main} />
    ),
  },
  {
    id: 2,
    name: 'History',
    icon: <FontAwesome5 name="book" size={75} color={COLOR.bgColor__Main} />,
  },
  {
    id: 3,
    name: 'Physic',
    icon: <Ionicons name="logo-react" size={75} color={COLOR.bgColor__Main} />,
  },
];
export default function GameContext({children}) {
  const [category, setCategory] = React.useState({
    active: 1,
    arrayActive: fakeCates,
  });
  const [amountUser, setAmountUser] = React.useState(initUserStreaming);
  const [player, setPlayer] = React.useState(initUserStreaming);
  const [currentQuestion, setCurrentQuestion] = React.useState(numberQuestion);
  const handleDecreaseUser = () => {
    const random = Math.round(Math.random() * 100);
    setAmountUser(prev =>
      prev - random > 3 || currentQuestion == 1 ? prev - random : 3,
    );
  };
  const handleDecreasePlayer = () => {
    const random = Math.round(Math.random() * 100);
    setPlayer(prev =>
      prev - random * 3 > 3 || currentQuestion == 1 ? prev - random * 3 : 1,
    );
  };
  const value = {
    category,
    setCategory,
    player,
    amountUser,
    handleDecreaseUser,
    setCurrentQuestion,
    handleDecreasePlayer,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
