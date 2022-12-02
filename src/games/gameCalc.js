const expIsWelcomeFunction = require('../index.js');
const expgetRandomNumber = require('../randomNumber.js');
const expgetUserResponse = require('../index.js');
const expgetGameRules = require('../index.js');

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
    const userResponse = expgetUserResponse.getUserResponse();

    if (+userResponse === finishedExample) {
      console.log('Correct!');
    } else {
      return `${userResponse} is wrong answer ;(. Correct answer was ${finishedExample}. \nLet's try again, ${nameUser}!`;
    }
  }
  return `Congratulations, ${nameUser}!`;
};

module.exports.isFindCountNumbers = isFindCountNumbers;
