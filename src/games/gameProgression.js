import { gamesLogic } from '../../index.js';
import { generateArithmeticProgression } from '../utils.js';

const generateUniqGameData = () => {
  const stringAndHiddenNum = generateArithmeticProgression();
  const stringArithmeticProgression = stringAndHiddenNum[0];
  const hiddenNum = stringAndHiddenNum[1];
  return [stringArithmeticProgression, String(hiddenNum)];
};

const runArithmeticProgression = () => {
  const rulesGame = 'What number is missing in the progression?';
  gamesLogic(rulesGame, generateUniqGameData);
};

export default runArithmeticProgression;
