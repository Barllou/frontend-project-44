const generalGameLogic = require('../index.js');
const { getRandomNumber } = require('../randomNumber.js');
const { primeNumber } = require('../primeNumber.js');

const isPrimeNumber = () => {
  const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const primeNumberUniqLogic = () => {
    const randomNumber = getRandomNumber(10);
    const primeNum = primeNumber(randomNumber);
    const question = randomNumber;
    return [question, primeNum];
  };
  generalGameLogic.isGamesLogic(rulesGame, primeNumberUniqLogic);
};

module.exports.isPrimeNumber = isPrimeNumber;
