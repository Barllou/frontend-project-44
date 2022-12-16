import { runGamesLogic } from '../../index.js';
import getRandomNumber from '../utils.js';

// Получить случайное число из выбранного диапазона.
const getRandomNumberFromRange = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};

// Получить строку арифметической прогрессии.
const generateArithmeticProgression = (firstNum, elemNum, step) => {
  const res = [];
  let count = 1;
  for (let i = firstNum; count <= elemNum; i += step) {
    res.push(i);
    count += 1;
  }
  return res;
};

const runArithmeticProgression = () => {
  const generateUniqGameData = () => {
    const MIN_NUM_ITER = 5;
    const MAX_NUM_ITER = 10;
    const MIN_NUM_STEP = 1;
    const MAX_NUM_STEP = 10;
    const firstNum = getRandomNumber();
    const elemNum = getRandomNumberFromRange(MIN_NUM_ITER, MAX_NUM_ITER);
    const step = getRandomNumberFromRange(MIN_NUM_STEP, MAX_NUM_STEP);
    const hidden = getRandomNumberFromRange(1, elemNum);
    const arrProgression = generateArithmeticProgression(firstNum, elemNum, step);
    let arrProgressionString = '';
    let hiddenNum;
    let count = 1;
    for (let i = 0; i < arrProgression.length; i += 1) {
      if (hidden === count) {
        arrProgressionString += '.. ';
        hiddenNum = arrProgression[i];
        count += 1;
      } else {
        arrProgressionString += `${arrProgression[i]} `;
        count += 1;
      }
    }
    return [arrProgressionString, String(hiddenNum)];
  };
  const rulesGame = 'What number is missing in the progression?';
  runGamesLogic(rulesGame, generateUniqGameData);
};

export default runArithmeticProgression;
