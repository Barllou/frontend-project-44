import readlineSync from 'readline-sync';

// Общая логика игры
const gamesLogic = (rulesGame, uniqLogic, NUM_ROUND = 3) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}! \n${rulesGame}`);

  for (let i = 1; i <= NUM_ROUND; i += 1) {
    const uniqLogicGame = uniqLogic();
    const question = uniqLogicGame[0];
    const uniqResult = uniqLogicGame[1];

    console.log(`Question: ${question}`);
    const userResponse = readlineSync.question('Your answer: ');

    if (userResponse === uniqResult) {
      console.log('Correct!');
    } else {
      console.log(`${userResponse} is wrong answer ;(. Correct answer was '${uniqResult}. \nLet's try again, ${name}!`);
      break;
    }
    if (i === NUM_ROUND) {
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

export { welcomeFunction, gamesLogic };
