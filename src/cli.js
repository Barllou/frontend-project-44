const readlineSync = require('readline-sync');

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return `Hello ${userName}!`;
};

module.exports.getUserName = getUserName;
