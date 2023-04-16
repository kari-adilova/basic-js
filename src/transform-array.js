const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(Array.isArray(arr))) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let transformedArray = [];
  let flagDiscard = 0;
  let flagDouble = 0;
  arr.forEach((element, index) => {
    if (element === '--discard-next') {
      flagDiscard = 1;
    } else if (element === '--double-next') {
      flagDouble = 1;
    } else if (element === '--discard-prev') {
      if (index >= 2 && arr[index - 2] === '--discard-next') {

      } else {
        transformedArray.pop();
      }
    } else if (element === '--double-prev') {
      if (index >= 2 && arr[index - 2] === '--discard-next') {

      } else if (transformedArray.length !== 0) {
        transformedArray.push(transformedArray[transformedArray.length - 1]);
      } else {

      }
    } else {
      if (flagDiscard === 1) {
        flagDiscard = 0;
      } else {
        transformedArray.push(element);
      }
      if (flagDouble === 1) {
        transformedArray.push(element);
        flagDouble = 0;
      }
    }
  });

  return transformedArray;
}

module.exports = {
  transform
};
