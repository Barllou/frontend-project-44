const greatesCommonDivisor = (firstNum, secondNum, iter) => {
  let gcdNum = 0;
  for (let j = 1; j <= iter; j += 1) {
    if (firstNum % j === 0 && secondNum % j === 0) {
      gcdNum = j;
    }
  }
  return gcdNum;
};

module.exports.greatesCommonDivisor = greatesCommonDivisor;
