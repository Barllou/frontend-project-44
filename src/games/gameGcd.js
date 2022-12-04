const generalGameLogic = require('../index.js');
const { getRandomNumber } = require('../randomNumber.js');
const { greatesCommonDivisor } = require('../greatesCommonDivisor.js');

const getGreatestCommonDivisor = () => {
  const nameUser = generalGameLogic.getUserGreeting('brain-gcd');

  for (let i = 1; i <= 3; i += 1) {
    const firstNum = getRandomNumber(10);
    const secondNum = getRandomNumber(10);
    const userResponse = generalGameLogic.getUserResponse((firstNum < secondNum) ? `Question: ${firstNum} ${secondNum}` : `Question: ${secondNum} ${firstNum}`);
    const iterValue = firstNum < secondNum ? secondNum : firstNum;
    const gcdNum = greatesCommonDivisor(firstNum, secondNum, iterValue);

    const resultOutput = generalGameLogic.isGamesLogic(userResponse, gcdNum, nameUser, i, 'brain-gcd');
    if (resultOutput === false) {
      break;
    }
  }
};

module.exports.getGreatestCommonDivisor = getGreatestCommonDivisor;
