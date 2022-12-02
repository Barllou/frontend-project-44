const  getCountExample = (firstNum, secondNum, sign) => {
  if (sign === '+') {
    return firstNum + secondNum;
  } else if (sign === '-') {
    return firstNum - secondNum;
  } else if (sign === '*') {
    return firstNum * secondNum;
  }
};

module.exports.getCountExample = getCountExample;