const generalGameLogic = require('../index.js');
const { getRandomNumber } = require('../randomNumber.js');

const getGreatestCommonDivisor = () => {
  const nameUser = generalGameLogic.getUserGreeting('brain-gcd');
  let count = 0;

  for (let i = 1; i <= 3; i += 1) {
    const firstNum = getRandomNumber(10);
    const secondNum = getRandomNumber(10);
    const userResponse = generalGameLogic.getUserResponse((firstNum < secondNum) ? `Question: ${firstNum} ${secondNum}` : `Question: ${secondNum} ${firstNum}`);
    const iterValue = firstNum < secondNum ? secondNum : firstNum;

    for (let j = 1; j <= iterValue; j += 1) {
      if (firstNum % j === 0 && secondNum % j === 0) {
        count = j;
      }
    }

    if (+userResponse === count) {
      console.log('Correct!');
    } else {
      return `${userResponse} is wrong answer ;(. Correct answer was ${count}. \nLet's try again, ${nameUser}!`;
    }
  }
  return `Congratulations, ${nameUser}!`;
};

module.exports.getGreatestCommonDivisor = getGreatestCommonDivisor;
