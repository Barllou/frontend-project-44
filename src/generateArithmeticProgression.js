const { getRandomNumber } = require('./randomNumber.js');
const { getRandomNumberFromRange } = require('./randomNumberFromRange.js');

const generateArithmeticProgression = () => {
  let arithmProgStr = '';
  let count = 1;
  let hiddenNum;
  const iter = getRandomNumberFromRange(5, 10);
  const replaceNum = getRandomNumberFromRange(1, iter);
  const incrementStep = getRandomNumberFromRange(1, 10);
  for (let j = getRandomNumber(); count <= iter; j += incrementStep) {
    if (replaceNum === count) {
      arithmProgStr += '.. ';
      hiddenNum = j;
      count += 1;
    } else {
      arithmProgStr += `${j} `;
      count += 1;
    }
  }
  return [arithmProgStr, hiddenNum];
};

module.exports.generateArithmeticProgression = generateArithmeticProgression;
