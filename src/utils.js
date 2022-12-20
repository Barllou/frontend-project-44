const getRandomNumber = (end = 100) => Math.floor(Math.random() * end) + 1;

// Get a random number from the selected range.
const getRandomNumberFromRange = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};

export { getRandomNumber, getRandomNumberFromRange };
