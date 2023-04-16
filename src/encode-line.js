const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) {
    return '';
  }
  let result = '';
  let currentLetter = str[0];
  let count = 0;
  let up = 0;
  let down = 0;
  while (down !== str.length - 1) {
      down++;
      if (str[down] === str[up]) {
          count++;
      } else {
          count++;
          result += (count === 1) ? currentLetter : count + currentLetter;
          currentLetter = str[down];
          up = down;
          count = 0;
      }
  }
  count++;
  result += (count === 1) ? str[up] : count + str[up];
  return result;
}

module.exports = {
  encodeLine
};
