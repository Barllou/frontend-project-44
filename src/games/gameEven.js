const generalGameLogic = require('../index.js');
const { getRandomNumber } = require('../randomNumber.js');

const isFindEvenNumber = () => {
  const nameUser = generalGameLogic.getUserGreeting('brain-even');

  for (let i = 1; i <= 3; i += 1) {
    const randomNum = getRandomNumber(10);
    const userResponse = generalGameLogic.getUserResponse(`Question: ${randomNum}`);
    const parity = randomNum % 2 === 0 ? 'yes' : 'no';

    const resultOutput = generalGameLogic.isGamesLogic(userResponse, parity, nameUser, i, 'brain-even');
    if (resultOutput === false) {
      break;
    }
  }
};

module.exports.isFindEvenNumber = isFindEvenNumber;
