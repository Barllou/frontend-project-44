import { runGamesLogic } from '../../index.js';
import getRandomNumber from '../utils.js';

// Получить наибольший общий делитель числа.
const getGreatesCommonDivisor = (firstNum, secondNum) => {
  const iter = firstNum < secondNum ? secondNum : firstNum;
  let gcdNum = 1;
  for (let j = 2; j <= iter; j += 1) {
    if (firstNum % j === 0 && secondNum % j === 0) {
      gcdNum = j;
    }
  }
  return gcdNum;
};

const runGreatestCommonDivisor = () => {
  const generateUniqGameData = () => {
    const MAX_NUM_GENERATE = 10;
    const randomFirstValue = getRandomNumber(MAX_NUM_GENERATE);
    const randomSecondValue = getRandomNumber(MAX_NUM_GENERATE);
    const question = `${Math.min(randomFirstValue, randomSecondValue)} ${Math.max(randomFirstValue, randomSecondValue)}`;
    const gcdNum = getGreatesCommonDivisor(randomFirstValue, randomSecondValue);
    return [question, String(gcdNum)];
  };
  const rulesGame = 'Find the greatest common divisor of given numbers.';
  runGamesLogic(rulesGame, generateUniqGameData);
};

export default runGreatestCommonDivisor;
