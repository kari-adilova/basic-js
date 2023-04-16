const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  let separator = '';
  let additionSeparator = '';
  let repeatTimes = 0;
  let additionRepeatTimes = 0;
  if ('separator' in options) {
    separator = options['separator']
  } else {
    separator = '+';
  }
  if ('additionSeparator' in options) {
    additionSeparator = options['additionSeparator']
  } else {
    additionSeparator = '|';
  }
  if ('repeatTimes' in options) {
    repeatTimes = options['repeatTimes'];
  } else {
    repeatTimes = 1;
  }
  if ('additionRepeatTimes' in options) {
    additionRepeatTimes = options['additionRepeatTimes'];
  } else {
    additionRepeatTimes = 1;
  }
  for (let i = 0;  i < repeatTimes; i++ ) {
    result += str;
    if ('addition' in options) {
        for (let j = 0; j < additionRepeatTimes; j++) {
            if (j === additionRepeatTimes - 1) {
                result += options['addition'];
            } else {
                result += options['addition'] + additionSeparator;
            }
        }
    }

    if (i !== repeatTimes - 1) {
      result += separator;
    } 
  }
  return result;
}

module.exports = {
  repeater
};
