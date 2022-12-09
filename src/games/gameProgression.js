import { gamesLogic } from '../../index.js';
import { generateArithmeticProgression } from '../utils.js';

const arithmeticProgressionUniqLogic = () => {
  const stringAndHiddenNum = generateArithmeticProgression();
  const stringArithmeticProgression = stringAndHiddenNum[0];
  const hiddenNum = stringAndHiddenNum[1];
  return [stringArithmeticProgression, String(hiddenNum)];
};

const runArithmeticProgression = () => {
  const rulesGame = 'What number is missing in the progression?';
  gamesLogic(rulesGame, arithmeticProgressionUniqLogic);
};

export default runArithmeticProgression;
