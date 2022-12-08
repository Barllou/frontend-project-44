const generalGameLogic = require('../../index.js');
const { getRandomNumber } = require('../randomNumber.js');
const { greatesCommonDivisor } = require('../greatesCommonDivisor.js');

const getGreatestCommonDivisor = () => {
  const rulesGame = 'Find the greatest common divisor of given numbers.';
  const primeNumberUniqLogic = () => {
    const firstNum = getRandomNumber(10);
    const secondNum = getRandomNumber(10);
    const iterValue = firstNum < secondNum ? secondNum : firstNum;
    const question = (firstNum < secondNum) ? `${firstNum} ${secondNum}` : `${secondNum} ${firstNum}`;
    const gcdNum = greatesCommonDivisor(firstNum, secondNum, iterValue);
    return [question, gcdNum];
  };
  generalGameLogic.isGamesLogic(rulesGame, primeNumberUniqLogic);
};

module.exports.getGreatestCommonDivisor = getGreatestCommonDivisor;
