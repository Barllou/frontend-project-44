import { runGamesLogic } from '../../index.js';
import getRandomNumber from '../utils.js';

// Equation calculation.
const getCalculationResult = (firstNum, secondNum, sign) => {
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
    const operationSigns = ['+', '-', '*'];
    const MAX_NUM_GENERATE = 10;
    const firstValue = getRandomNumber(MAX_NUM_GENERATE);
    const secondValue = getRandomNumber(MAX_NUM_GENERATE);
    const randomSymbol = operationSigns[getRandomNumber(operationSigns.length - 1)];
    const correctAnswer = getCalculationResult(firstValue, secondValue, randomSymbol);
    const question = `${firstValue} ${randomSymbol} ${secondValue}`;
    return [question, String(correctAnswer)];
  };
  const rulesGame = 'What is the result of the expression?';
  runGamesLogic(rulesGame, generateUniqGameData);
};

export default runFindCountNumbers;
