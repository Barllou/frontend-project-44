const generalGameLogic = require('../../index.js');
const { getRandomNumber } = require('../randomNumber.js');
const { getCountExample } = require('../finishedExample.js');

const isFindCountNumbers = () => {
  const rulesGame = 'What is the result of the expression?';

  const countNumberUniqLogic = () => {
    const symbolArr = ['+', '-', '*'];
    const firstNum = getRandomNumber(10);
    const secondNum = getRandomNumber(10);
    const randomSymbol = symbolArr[getRandomNumber(symbolArr.length - 1)];
    const finishedExample = getCountExample(firstNum, secondNum, randomSymbol);
    const question = `${firstNum} ${randomSymbol} ${secondNum}`;
    return [question, String(finishedExample)];
  };
  generalGameLogic.isGamesLogic(rulesGame, countNumberUniqLogic);
};

module.exports.isFindCountNumbers = isFindCountNumbers;
