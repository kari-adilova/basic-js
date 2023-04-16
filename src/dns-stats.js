const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  let current = [];
  for (let i = 0; i < domains.length; i++) {
      current.push(domains[i].split('.').reverse().join('.'));
  }
  for (let i = 0; i < current.length; i++) {
    if ('.' + current[i] in result) {
        result['.' + current[i]]++;
    } else {
      result['.' + current[i]] = 1;
    }
  }
  for (let i = 0; i < current.length; i++) {
    for (let j = 0; j < current[i].length; j++) {
      if (current[i][j] === '.') {
          if ('.' + current[i].slice(0, j) in result) {
              result['.' + current[i].slice(0, j)]++;
          } else {
            result['.' + current[i].slice(0, j)] = 1;
          }
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
