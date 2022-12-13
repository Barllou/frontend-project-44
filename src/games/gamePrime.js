import { gamesLogic } from '../../index.js';
import { getRandomNumber, getPrimeNumber } from '../utils.js';

const generateUniqGameData = () => {
  const MAX_NUM_GENERATE = 10;
  const randomValue = getRandomNumber(MAX_NUM_GENERATE);
  const primeNum = getPrimeNumber(randomValue);
  const question = randomValue;
  return [question, primeNum];
};

const runPrimeNumber = () => {
  const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gamesLogic(rulesGame, generateUniqGameData);
};

export default runPrimeNumber;
