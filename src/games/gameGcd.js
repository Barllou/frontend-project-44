import { runGamesLogic } from '../../index.js';
import getRandomNumber from '../utils.js';

// Get the greatest common divisor of a number.
const getGreatesCommonDivisor = (firstNum, secondNum) => {
  const iter = Math.max(firstNum, secondNum);
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
