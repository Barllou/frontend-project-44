// Вычисление уравнения для gameCalc.js.
const getCountExample = (firstNum, secondNum, sign) => {
  switch (sign) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      break;
  }
  return 'false';
};

// Узнать, простое число или нет.
const isPrimeNumber = (num) => {
  if (num === 1) {
    return 'no';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

// Получить случайное число.
const getRandomNumber = (end = 100) => Math.floor(Math.random() * end) + 1;

// Получить случайное число из выбранного диапазона.
const getRandomNumberFromRange = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};

// Получить строку арифметической прогрессии для gameProgression.js.
const generateArithmeticProgression = () => {
  let arithmeticProgressionString = '';
  let count = 1;
  let hiddenNum;
  const iter = getRandomNumberFromRange(5, 10);
  const replaceNum = getRandomNumberFromRange(1, iter);
  const incrementStep = getRandomNumberFromRange(1, 10);
  for (let j = getRandomNumber(); count <= iter; j += incrementStep) {
    if (replaceNum === count) {
      arithmeticProgressionString += '.. ';
      hiddenNum = j;
      count += 1;
    } else {
      arithmeticProgressionString += `${j} `;
      count += 1;
    }
  }
  return [arithmeticProgressionString, hiddenNum];
};

// Получить наибольший общий делитель числа для gameGcd.js.
const getGreatesCommonDivisor = (firstNum, secondNum, iter) => {
  let gcdNum = 1;
  for (let j = 2; j <= iter; j += 1) {
    if (firstNum % j === 0 && secondNum % j === 0) {
      gcdNum = j;
    }
  }
  return gcdNum;
};

export {
  getCountExample,
  getRandomNumber,
  isPrimeNumber,
  generateArithmeticProgression,
  getRandomNumberFromRange,
  getGreatesCommonDivisor,
};
