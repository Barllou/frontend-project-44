const generalGameLogic = require('../../index.js');
const { generateArithmeticProgression } = require('../generateArithmeticProgression.js');

const isArithmeticProgression = () => {
  const rulesGame = 'What number is missing in the progression?';
  const arithmProgrUniqLogic = () => {
    const stringAndHiddenNum = generateArithmeticProgression();
    const stringArithmProgr = stringAndHiddenNum[0];
    const hiddenNum = stringAndHiddenNum[1];
    return [stringArithmProgr, String(hiddenNum)];
  };
  generalGameLogic.isGamesLogic(rulesGame, arithmProgrUniqLogic);
};

module.exports.isArithmeticProgression = isArithmeticProgression;
