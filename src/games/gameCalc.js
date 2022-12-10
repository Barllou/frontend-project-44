import { gamesLogic } from '../../index.js';
import { getRandomNumber, getCountExample } from '../utils.js';

const generateUniqGameData = () => {
  const symbolArr = ['+', '-', '*'];
  const RANDOM_FIRST_VALUE = getRandomNumber(10);
  const RANDOM_SECOND_VALUE = getRandomNumber(10);
  const randomSymbol = symbolArr[getRandomNumber(symbolArr.length - 1)];
  const finishedExample = getCountExample(RANDOM_FIRST_VALUE, RANDOM_SECOND_VALUE, randomSymbol);
  const question = `${RANDOM_FIRST_VALUE} ${randomSymbol} ${RANDOM_SECOND_VALUE}`;
  return [question, String(finishedExample)];
};

const runFindCountNumbers = () => {
  const rulesGame = 'What is the result of the expression?';
  gamesLogic(rulesGame, generateUniqGameData);
};

export default runFindCountNumbers;
