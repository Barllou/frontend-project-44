const readlineSync = require('readline-sync');

const isFindCountNumbers = (nameUser) => {
  const symbolArr = ['+', '-', '*'];
  console.log('What is the result of the expression?');

  for (let i = 1; i <= 3; i += 1) {
    const firstRandomNumber = Math.floor(Math.random() * 100) + 1;
    const secondRandomNumber = Math.floor(Math.random() * 100) + 1;
    const randomSymbol = Math.floor(Math.random() * symbolArr.length);
    const finishedExample = eval(`${firstRandomNumber} ${symbolArr[randomSymbol]} ${secondRandomNumber}`);
    console.log(`Question: ${firstRandomNumber} ${symbolArr[randomSymbol]} ${secondRandomNumber}`);
    const userResponse = readlineSync.question('Your answer: ');

    if (+userResponse === finishedExample) {
      console.log('Correct!');
    } else {
      return `${userResponse} is wrong answer ;(. Correct answer was ${finishedExample}. \nLet's try again, ${nameUser}!`;
    }
  }
  return `Congratulations, ${nameUser}!`;
};

module.exports.isFindCountNumbers = isFindCountNumbers;
