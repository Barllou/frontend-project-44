const readlineSync = require('readline-sync');

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  return userName;
};

module.exports.getUserName = getUserName;
