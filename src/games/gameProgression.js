import { gamesLogic } from '../../index.js';
import { getGenerateArithmeticProgression } from '../utils.js';

const generateUniqGameData = () => {
  const stringAndHiddenNum = getGenerateArithmeticProgression();
  const stringArithmeticProgression = stringAndHiddenNum[0];
  const hiddenNum = stringAndHiddenNum[1];
  return [stringArithmeticProgression, String(hiddenNum)];
};

const runArithmeticProgression = () => {
  const rulesGame = 'What number is missing in the progression?';
  gamesLogic(rulesGame, generateUniqGameData);
};

export default runArithmeticProgression;
