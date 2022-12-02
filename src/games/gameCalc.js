const expgetUserGreeting = require('../index.js');
const expgetRandomNumber = require('../randomNumber.js');
const expgetUserResponse = require('../index.js');
const expgetCountExample = require('../finishedExample.js');

const isFindCountNumbers = () => {
  const nameUser = expgetUserGreeting.getUserGreeting('brain-calc');
  const symbolArr = ['+', '-', '*'];

  for (let i = 1; i <= 3; i += 1) {
    const firstRandomNumber = expgetRandomNumber.getRandomNumber(10);
    const secondRandomNumber = expgetRandomNumber.getRandomNumber(10);
    const randomSymbol = expgetRandomNumber.getRandomNumber(symbolArr.length - 1);
    const finishedExample = expgetCountExample.getCountExample(firstRandomNumber, secondRandomNumber, symbolArr[randomSymbol]);
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
