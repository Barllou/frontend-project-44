function getRandomNumberFromRange(min, max) {
  const Min = Math.ceil(min);
  const Max = Math.floor(max);
  return Math.floor(Math.random() * (Max - Min + 1)) + Min;
}

module.exports.getRandomNumberFromRange = getRandomNumberFromRange;
