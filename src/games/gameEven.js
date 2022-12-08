const generalGameLogic = require('../../index.js');
const { getRandomNumber } = require('../randomNumber.js');

const isFindEvenNumber = () => {
  const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';

  const evenNumberUniqLogic = () => {
    const randomNum = getRandomNumber(10);
    const question = randomNum;
    const parity = randomNum % 2 === 0 ? 'yes' : 'no';
    return [question, parity];
  };
  generalGameLogic.isGamesLogic(rulesGame, evenNumberUniqLogic);
};

module.exports.isFindEvenNumber = isFindEvenNumber;
