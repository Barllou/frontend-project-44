import { gamesLogic } from '../../index.js';
import { getRandomNumber, getGreatesCommonDivisor } from '../utils.js';

const gcdUniqLogic = () => {
  const RANDOM_FIRST_VALUE = getRandomNumber(10);
  const RANDOM_SECOND_VALUE = getRandomNumber(10);
  const iterValue = RANDOM_FIRST_VALUE < RANDOM_SECOND_VALUE ? RANDOM_SECOND_VALUE : RANDOM_FIRST_VALUE;
  const question = (RANDOM_FIRST_VALUE < RANDOM_SECOND_VALUE) ? `${RANDOM_FIRST_VALUE} ${RANDOM_SECOND_VALUE}` : `${RANDOM_SECOND_VALUE} ${RANDOM_FIRST_VALUE}`;
  const gcdNum = getGreatesCommonDivisor(RANDOM_FIRST_VALUE, RANDOM_SECOND_VALUE, iterValue);
  return [question, String(gcdNum)];
};

const runGreatestCommonDivisor = () => {
  const rulesGame = 'Find the greatest common divisor of given numbers.';
  gamesLogic(rulesGame, gcdUniqLogic);
};

export default runGreatestCommonDivisor;
