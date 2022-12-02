const getRandomNumber = (end = 100) => {
  return Math.floor(Math.random() * end) + 1;
};

module.exports.getRandomNumber = getRandomNumber;
