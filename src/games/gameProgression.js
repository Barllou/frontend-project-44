const generalGameLogic = require('../index.js');
const { generateArithmeticProgression } = require('../generateArithmeticProgression.js');

const isArithmeticProgression = () => {
  const rulesGame = 'What number is missing in the progression?';
  const primeNumberUniqLogic = () => {
    const stringAndHiddenNum = generateArithmeticProgression();
    const stringArithmProgr = stringAndHiddenNum[0];
    const hiddenNum = stringAndHiddenNum[1];
    return [stringArithmProgr, hiddenNum];
  };
  generalGameLogic.isGamesLogic(rulesGame, primeNumberUniqLogic);
};

module.exports.isArithmeticProgression = isArithmeticProgression;
