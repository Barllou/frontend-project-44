const expIsWelcomeFunction = require('../index.js');
const expgetRandomNumber = require('../randomNumber.js');
const expgetUserResponse = require('../index.js');
const expgetGameRules = require('../index.js');

const isFindEvenNumber = () => {
  const nameUser = expIsWelcomeFunction.isWelcomeFunction();
  expgetGameRules.getGameRules('brain-even');

  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = expgetRandomNumber.getRandomNumber(10);
    console.log(`Question: ${randomNumber}`);
    const userResponse = expgetUserResponse.getUserResponse();
    const parity = randomNumber % 2 === 0 ? 'yes' : 'no';

    if (userResponse !== 'yes' && userResponse !== 'no') {
      return `Let's try again, ${nameUser}!`;
    }
    if (parity === userResponse) {
      console.log('Correct!');
    } else {
      return `Let's try again, ${nameUser}!`;
    }
  }
  return `Congratulations, ${nameUser}!`;
};

module.exports.isFindEvenNumber = isFindEvenNumber;
