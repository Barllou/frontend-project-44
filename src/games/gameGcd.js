import { gamesLogic } from '../../index.js';
import { getRandomNumber, getGreatesCommonDivisor } from '../utils.js';

const gcdUniqLogic = () => {
  const RANDOM_FIRST_NUM = getRandomNumber(10);
  const RANDOM_SECOND_NUM = getRandomNumber(10);
  const iterValue = RANDOM_FIRST_NUM < RANDOM_SECOND_NUM ? RANDOM_SECOND_NUM : RANDOM_FIRST_NUM;
  const question = (RANDOM_FIRST_NUM < RANDOM_SECOND_NUM) ? `${RANDOM_FIRST_NUM} ${RANDOM_SECOND_NUM}` : `${RANDOM_SECOND_NUM} ${RANDOM_FIRST_NUM}`;
  const gcdNum = getGreatesCommonDivisor(RANDOM_FIRST_NUM, RANDOM_SECOND_NUM, iterValue);
  return [question, String(gcdNum)];
};

const runGreatestCommonDivisor = () => {
  const rulesGame = 'Find the greatest common divisor of given numbers.';
  gamesLogic(rulesGame, gcdUniqLogic);
};

export default runGreatestCommonDivisor;
