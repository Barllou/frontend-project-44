import { runGamesLogic } from '../../index.js';
import { getRandomNumber } from '../utils.js';

const isEven = (number) => (number % 2 === 0);

const runFindEvenNumber = () => {
  const generateUniqGameData = () => {
    const MAX_NUM_GENERATE = 10;
    const randomValue = getRandomNumber(MAX_NUM_GENERATE);
    const question = randomValue;
    const parity = isEven(randomValue) ? 'yes' : 'no';
    return [question, parity];
  };
  const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGamesLogic(rulesGame, generateUniqGameData);
};

export default runFindEvenNumber;
