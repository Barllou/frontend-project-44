import { runGamesLogic } from '../../index.js';
import getRandomNumber from '../utils.js';

// Узнать, простое число или нет.
const getPrimeNumber = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateUniqGameData = () => {
  const MAX_NUM_GENERATE = 10;
  const randomValue = getRandomNumber(MAX_NUM_GENERATE);
  const primeNum = getPrimeNumber(randomValue) ? 'yes' : 'no';
  const question = randomValue;
  return [question, primeNum];
};

const runPrimeNumber = () => {
  const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGamesLogic(rulesGame, generateUniqGameData);
};

export default runPrimeNumber;
