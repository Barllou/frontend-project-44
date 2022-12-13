import { gamesLogic } from '../../index.js';
import { getRandomNumber, getGreatesCommonDivisor } from '../utils.js';

const generateUniqGameData = () => {
  const MAX_NUM_GENERATE = 10;
  const randomFirstValue = getRandomNumber(MAX_NUM_GENERATE);
  const randomSecondValue = getRandomNumber(MAX_NUM_GENERATE);
  const question = (randomFirstValue < randomSecondValue) ? `${randomFirstValue} ${randomSecondValue}` : `${randomSecondValue} ${randomFirstValue}`;
  const gcdNum = getGreatesCommonDivisor(randomFirstValue, randomSecondValue);
  return [question, String(gcdNum)];
};

const runGreatestCommonDivisor = () => {
  const rulesGame = 'Find the greatest common divisor of given numbers.';
  gamesLogic(rulesGame, generateUniqGameData);
};

export default runGreatestCommonDivisor;
