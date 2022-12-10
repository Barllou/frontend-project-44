import { gamesLogic } from '../../index.js';
import { getRandomNumber } from '../utils.js';

const generateUniqGameData = () => {
  const RANDOM_VALUE = getRandomNumber(10);
  const question = RANDOM_VALUE;
  const parity = RANDOM_VALUE % 2 === 0 ? 'yes' : 'no';
  return [question, parity];
};

const runFindEvenNumber = () => {
  const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  gamesLogic(rulesGame, generateUniqGameData);
};

export default runFindEvenNumber;
