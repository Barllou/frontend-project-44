import { runGamesLogic } from '../../index.js';
import { getRandomNumber, getRandomNumberFromRange } from '../utils.js';

// Get an arithmetic progression string.
const generateArithmeticProgression = (firstNum, lingthProgression, step) => {
  const result = [];
  let count = 1;
  for (let i = firstNum; count <= lingthProgression; i += step) {
    result.push(i);
    count += 1;
  }
  return result;
};

const runArithmeticProgression = () => {
  const generateUniqGameData = () => {
    const MIN_NUM_ITER = 5;
    const MAX_NUM_ITER = 10;
    const MIN_NUM_STEP = 1;
    const MAX_NUM_STEP = 10;
    const firstNum = getRandomNumber();
    const lingthProgression = getRandomNumberFromRange(MIN_NUM_ITER, MAX_NUM_ITER);
    const step = getRandomNumberFromRange(MIN_NUM_STEP, MAX_NUM_STEP);
    const hiddenPosition = getRandomNumberFromRange(1, lingthProgression);
    const arithmeticProgression = generateArithmeticProgression(firstNum, lingthProgression, step);
    let progressionLine = '';
    let hiddenNum;
    let count = 1;
    for (let i = 0; i < arithmeticProgression.length; i += 1) {
      if (hiddenPosition === count) {
        progressionLine += '.. ';
        hiddenNum = arithmeticProgression[i];
        count += 1;
      } else {
        progressionLine += `${arithmeticProgression[i]} `;
        count += 1;
      }
    }
    return [progressionLine, String(hiddenNum)];
  };
  const rulesGame = 'What number is missing in the progression?';
  runGamesLogic(rulesGame, generateUniqGameData);
};

export default runArithmeticProgression;
