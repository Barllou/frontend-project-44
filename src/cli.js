let readlineSync = require('readline-sync');

const getUserName = () => {
    let userName = readlineSync.question('May I have your name? ');
    return `Hello ${userName}!`
}

module.exports.getUserName = getUserName;