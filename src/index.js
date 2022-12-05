const readlineSync = require('readline-sync');
const { getUserName } = require('./cli.js');

// Общая логика игры
const isGamesLogic = (userValue, uniqValue, userName, iter, nameGame) => {
  if (userValue == uniqValue) {
    console.log('Correct!');
  } else if (userValue !== uniqValue && nameGame === 'brain-calc') {
    console.log(`${userValue} is wrong answer ;(. Correct answer was ${uniqValue}. \nLet's try again, ${userName}!`);
    return false;
  } else if (userValue !== uniqValue && nameGame === 'brain-gcd') {
    console.log(`${userValue} is wrong answer ;(. Correct answer was ${uniqValue}. \nLet's try again, ${userName}!`);
    return false;
  } else if (userValue !== uniqValue && nameGame === 'brain-progression') {
    console.log(`${userValue} is wrong answer ;(. Correct answer was ${uniqValue}. \nLet's try again, ${userName}!`);
    return false;
  } else if (userValue !== uniqValue && nameGame === 'brain-prime') {
    console.log(`${userValue} is wrong answer ;(. Correct answer was ${uniqValue}. \nLet's try again, ${userName}!`);
    return false;
  } else if (userValue !== uniqValue && nameGame === 'brain-even') {
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
  if (iter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

// Знакомство, правила и приветствие пользователя.
const getUserGreeting = (value) => {
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
    case 'brain-progression':
      console.log('What number is missing in the progression?');
      break;
    case 'brain-prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
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

// Приветствие пользователя brain-games.js (не удалять!)
/* const welcomeFunction = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
}; */

module.exports.getUserGreeting = getUserGreeting;
module.exports.getUserResponse = getUserResponse;
module.exports.isGamesLogic = isGamesLogic;
