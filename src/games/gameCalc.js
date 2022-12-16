import { runGamesLogic } from '../../index.js';
import getRandomNumber from '../utils.js';

// Вычисление уравнения.
const getCountExample = (firstNum, secondNum, sign) => {
  switch (sign) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      break;
  }
  return 'false';
};

const runFindCountNumbers = () => {
  const generateUniqGameData = () => {
    const operationSign = ['+', '-', '*'];
    const MAX_NUM_GENERATE = 10;
    const randomFirstValue = getRandomNumber(MAX_NUM_GENERATE);
    const randomSecondValue = getRandomNumber(MAX_NUM_GENERATE);
    const randomSymbol = operationSign[getRandomNumber(operationSign.length - 1)];
    const finishedExample = getCountExample(randomFirstValue, randomSecondValue, randomSymbol);
    const question = `${randomFirstValue} ${randomSymbol} ${randomSecondValue}`;
    return [question, String(finishedExample)];
  };
  const rulesGame = 'What is the result of the expression?';
  runGamesLogic(rulesGame, generateUniqGameData);
};

export default runFindCountNumbers;
