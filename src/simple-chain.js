const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
let chains = [];
const chainMaker = {
  getLength() {
    return chains.length;
  },
  addLink(value) {
    if (value === undefined) {
      chains.push('');
    } else {
      chains.push(value);
    }
    return this;
  },
  removeLink(position) {
    if (typeof(position) !== 'number' || !(Number.isInteger(position))) {
      chains = [];
      throw new Error("You can't remove incorrect link!");
    } else if (!(position > 0 && position < chains.length)) {
      chains = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      chains.splice(position - 1, 1);
    }
    return this;

  },
  reverseChain() {
    chains.reverse();
    return this;

  },
  finishChain() {
    let result = '';
    chains.forEach((elem, index) => {
      if (index === chains.length - 1) {
        result += '( ' + elem + ' )';
      } else {
        result += '( ' + elem + ' )' + '~~';
      }
    });
    chains = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
