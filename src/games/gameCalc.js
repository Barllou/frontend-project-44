const expIsWelcomeFunction = require('../../src/index.js');
const expgetRandomNumber = require('../../src/randomNumber.js');
const expgetUserResponse = require('../../src/index.js');
const expgetGameRules = require('../../src/index.js');

const isFindCountNumbers = () => {
  const nameUser = expIsWelcomeFunction.isWelcomeFunction();
  expgetGameRules.getGameRules('brain-calc');
  const symbolArr = ['+', '-', '*'];

  for (let i = 1; i <= 3; i += 1) {
    const firstRandomNumber = expgetRandomNumber.getRandomNumber(10);
    const secondRandomNumber = expgetRandomNumber.getRandomNumber(10);
    const randomSymbol = expgetRandomNumber.getRandomNumber(symbolArr.length - 1);
    const finishedExample = eval(`${firstRandomNumber} ${symbolArr[randomSymbol]} ${secondRandomNumber}`);
    console.log(`Question: ${firstRandomNumber} ${symbolArr[randomSymbol]} ${secondRandomNumber}`);
    const userResponse = expgetUserResponse.getUserResponse('Your answer:');

    if (+userResponse === finishedExample) {
      console.log('Correct!');
    } else {
      return `${userResponse} is wrong answer ;(. Correct answer was ${finishedExample}. \nLet's try again, ${nameUser}!`;
    }
  }
  return `Congratulations, ${nameUser}!`;
};

module.exports.isFindCountNumbers = isFindCountNumbers;
