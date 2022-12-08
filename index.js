const readlineSync = require('readline-sync');

// Общая логика игры
const isGamesLogic = (rulesGame, uniqLogic, step = 3) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(rulesGame);

  for (let i = 1; i <= step; i += 1) {
    const questionAndResult = uniqLogic();

    console.log(`Question: ${questionAndResult[0]}`);
    const userResponse = readlineSync.question('Your answer: ');

    if (userResponse === questionAndResult[1]) {
      console.log('Correct!');
    } else {
      console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${questionAndResult[1]}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === step) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

// Приветствие пользователя brain-games.js (не удалять!)
const welcomeFunction = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

module.exports.welcomeFunction = welcomeFunction;
module.exports.isGamesLogic = isGamesLogic;
