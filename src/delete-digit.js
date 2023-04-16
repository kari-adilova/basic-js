const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0;
  let nStr = n.toString();
  for (let i = 0; i < nStr.length; i++) {
    let str1 = nStr.slice(0, i);
    let str2 = nStr.slice(i + 1, nStr.length);
    let str = str1 + str2;
    if (Number(str) > result) {
      result = Number(str);
    }
  }
  return result;
}

module.exports = {
  deleteDigit
};
