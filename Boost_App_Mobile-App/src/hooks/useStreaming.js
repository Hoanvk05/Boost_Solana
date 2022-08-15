import React from 'react';

const initUserStreaming = 642;
const numberQuestion = 5;
export default function useStreaming() {
  const [amountUser, setAmountUser] = React.useState(initUserStreaming);
  const [currentQuestion, setCurrentQuestion] = React.useState(numberQuestion);
  const handleDecreaseUser = () => {
    const random = Math.round(Math.random() * 100);
    amountUser <= 3 || currentQuestion == 1
      ? setAmountUser(3)
      : setAmountUser(prev => prev - random);
  };
  return {
    amountUser,
    handleDecreaseUser,
    setCurrentQuestion,
  };
}
