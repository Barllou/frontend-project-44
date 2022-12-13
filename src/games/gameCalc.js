import { gamesLogic } from '../../index.js';
import { getRandomNumber, getCountExample } from '../utils.js';

const generateUniqGameData = () => {
  const symbolArr = ['+', '-', '*'];
  const MAX_NUM_GENERATE = 10;
  const randomFirstValue = getRandomNumber(MAX_NUM_GENERATE);
  const randomSecondValue = getRandomNumber(MAX_NUM_GENERATE);
  const randomSymbol = symbolArr[getRandomNumber(symbolArr.length - 1)];
  const finishedExample = getCountExample(randomFirstValue, randomSecondValue, randomSymbol);
  const question = `${randomFirstValue} ${randomSymbol} ${randomSecondValue}`;
  return [question, String(finishedExample)];
};

const runFindCountNumbers = () => {
  const rulesGame = 'What is the result of the expression?';
  gamesLogic(rulesGame, generateUniqGameData);
};

export default runFindCountNumbers;
