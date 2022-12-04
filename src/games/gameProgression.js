const generalGameLogic = require('../index.js');
const { generateArithmeticProgression } = require('../generateArithmeticProgression.js');

const isArithmeticProgression = () => {
  const nameUser = generalGameLogic.getUserGreeting('brain-progression');
  for (let i = 1; i <= 3; i += 1) {
    const stringAndHiddenNum = generateArithmeticProgression();
    const userResponse = generalGameLogic.getUserResponse(`Question: ${stringAndHiddenNum[0]}`);
    const resultOutput = generalGameLogic.isGamesLogic(userResponse, stringAndHiddenNum[1], nameUser, i, 'brain-progression');
    if (resultOutput === false) {
      break;
    }
  }
};

module.exports.isArithmeticProgression = isArithmeticProgression;
