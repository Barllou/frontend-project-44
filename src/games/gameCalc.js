const generalGameLogic = require('../index.js');
const { getRandomNumber } = require('../randomNumber.js');
const { getCountExample } = require('../finishedExample.js');

const isFindCountNumbers = () => {
  const nameUser = generalGameLogic.getUserGreeting('brain-calc');
  const symbolArr = ['+', '-', '*'];

  for (let i = 1; i <= 3; i += 1) {
    const firstNum = getRandomNumber(10);
    const secondNum = getRandomNumber(10);
    const randomSymbol = symbolArr[getRandomNumber(symbolArr.length - 1)];
    const finishedExample = getCountExample(firstNum, secondNum, randomSymbol);
    const userResponse = generalGameLogic.getUserResponse(`Question: ${firstNum} ${randomSymbol} ${secondNum}`);

    const resultOutput = generalGameLogic.isGamesLogic(userResponse, finishedExample, nameUser, i, 'brain-calc');
    if (resultOutput === false) {
      break;
    }
  }
};

module.exports.isFindCountNumbers = isFindCountNumbers;
