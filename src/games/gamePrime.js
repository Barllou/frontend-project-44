const generalGameLogic = require('../index.js');
const { getRandomNumber } = require('../randomNumber.js');
const { primeNumber } = require('../primeNumber.js');

const isPrimeNumber = () => {
  const nameUser = generalGameLogic.getUserGreeting('brain-prime');
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = getRandomNumber(10);
    const primeNum = primeNumber(randomNumber);
    const userResponse = generalGameLogic.getUserResponse(`Question: ${randomNumber}`);
    const resultOutput = generalGameLogic.isGamesLogic(userResponse, primeNum, nameUser, i, 'brain-prime');
    if (resultOutput === false) {
      break;
    }
  }
};

module.exports.isPrimeNumber = isPrimeNumber;
