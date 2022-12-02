const getCountExample = (firstNum, secondNum, sign) => {
  if (sign === '+') {
    return firstNum + secondNum;
  }
  if (sign === '-') {
    return firstNum - secondNum;
  }
  if (sign === '*') {
    return firstNum * secondNum;
  }
};

module.exports.getCountExample = getCountExample;
