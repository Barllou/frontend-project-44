import { gamesLogic } from '../../index.js';
import { getRandomNumber, isPrimeNumber } from '../utils.js';

const primeNumberUniqLogic = () => {
    const RANDOM_VALUE = getRandomNumber(10);
    const primeNum = isPrimeNumber(RANDOM_VALUE);
    const question = RANDOM_VALUE;
    return [question, primeNum];
  };

const runPrimeNumber = () => {
  const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gamesLogic(rulesGame, primeNumberUniqLogic);
};

export default runPrimeNumber;
