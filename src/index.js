const expGetUserName = require('../src/cli.js');
const readlineSync = require('readline-sync');

//Знакомство, правила и приветствие пользователя.
const getUserGreeting = (value) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = expGetUserName.getUserName();

  if (value === 'brain-calc') {
    console.log('What is the result of the expression?');
  } else if (value === 'brain-even') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  }
  return nameUser;
};


//Получение ответа пользователя.
const getUserResponse = () => {
  return readlineSync.question(`Your answer: `);
};

module.exports.getUserGreeting = getUserGreeting;
module.exports.getUserResponse = getUserResponse;
