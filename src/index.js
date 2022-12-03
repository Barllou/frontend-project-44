const readlineSync = require('readline-sync');
const { getUserName } = require('./cli.js');

// Знакомство, правила и приветствие пользователя.
const getUserGreeting = (value) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = getUserName();

  switch (value) {
    case 'brain-calc':
      console.log('What is the result of the expression?');
      break;
    case 'brain-even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'brain-gcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    default:
      break;
  }
  return nameUser;
};

// Вопрос / ответ пользователя.
const getUserResponse = (value) => {
  console.log(value);
  return readlineSync.question('Your answer: ');
};

module.exports.getUserGreeting = getUserGreeting;
module.exports.getUserResponse = getUserResponse;
