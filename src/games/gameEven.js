const generalGameLogic = require('../index.js');
const { getRandomNumber } = require('../randomNumber.js');

const isFindEvenNumber = () => {
  const nameUser = generalGameLogic.getUserGreeting('brain-even');

  for (let i = 1; i <= 3; i += 1) {
    const randomNum = getRandomNumber(10);
    const userResponse = generalGameLogic.getUserResponse(`Question: ${randomNum}`);
    const parity = randomNum % 2 === 0 ? 'yes' : 'no';

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
