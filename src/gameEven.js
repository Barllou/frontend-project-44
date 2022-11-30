const readlineSync = require('readline-sync');

const isFindEvenNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${randomNumber}`);
  const userResponse = readlineSync.question('Your answer: ');
  const parity = randomNumber % 2 === 0 ? 'yes' : 'no';
  if (userResponse !== 'yes' && userResponse !== 'no') {
    return 'Let\'s try again';
  }
  return parity === userResponse ? 'Correct!' : 'Let\'s try again';
};
module.exports.isFindEvenNumber = isFindEvenNumber;
