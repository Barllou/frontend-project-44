const expGetUserName = require('../src/cli.js');
const readlineSync = require('readline-sync');

//Знакомство и приветствие пользователя
const isWelcomeFunction = () => {
  console.log('Welcome to the Brain Games!');
  return expGetUserName.getUserName();
};

//Показать задание игры.
const getGameRules = (value) => {
  if (value === 'brain-calc') {
    console.log('What is the result of the expression?');
  } else if (value === 'brain-even') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  }
};

//Получение ответа пользователя.
const getUserResponse = (value) => {
  return readlineSync.question(`${value} `);
};

module.exports.isWelcomeFunction = isWelcomeFunction;
module.exports.getUserResponse = getUserResponse;
module.exports.getGameRules = getGameRules;
