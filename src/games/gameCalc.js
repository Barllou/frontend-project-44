const generalGameLogic = require('../../index.js');
const { getRandomNumber } = require('../randomNumber.js');
const { getCountExample } = require('../finishedExample.js');

const isFindCountNumbers = () => {
  const rulesGame = 'What is the result of the expression?';

  const primeNumberUniqLogic = () => {
    const symbolArr = ['+', '-', '*'];
    const firstNum = getRandomNumber(10);
    const secondNum = getRandomNumber(10);
    const randomSymbol = symbolArr[getRandomNumber(symbolArr.length - 1)];
    const finishedExample = getCountExample(firstNum, secondNum, randomSymbol);
    const question = `${firstNum} ${randomSymbol} ${secondNum}`;
    return [question, finishedExample];
  };
  generalGameLogic.isGamesLogic(rulesGame, primeNumberUniqLogic);
};

module.exports.isFindCountNumbers = isFindCountNumbers;
