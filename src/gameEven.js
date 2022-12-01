const readlineSync = require('readline-sync');

const isFindEvenNumber = (nameUser) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    const userResponse = readlineSync.question('Your answer: ');
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
