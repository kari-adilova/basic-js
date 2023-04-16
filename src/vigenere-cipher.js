const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
class VigenereCipheringMachine {
  machineType = 'direct';
  
  constructor(isDirect) {
    if (isDirect === undefined || isDirect) {
      this.machineType = 'direct';
    } else {
      this.machineType = 'reverse';
    }
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let newMessage = '';
    let messageUp = message.toUpperCase();
    let keyUp = key.toUpperCase();
    for (let i = 0; i < messageUp.length; i++) {
        if (alphabet.includes(messageUp[i])) {
            newMessage += messageUp[i];
        }
    }

    let maxLength = Math.max(newMessage.length, keyUp.length);
    let result = '';
    let mL = newMessage.length;
    let kL = keyUp.length;
    for (let i = 0; i < maxLength; i++) {
      if (alphabet.includes(newMessage[i])) {
        let mi = alphabet.indexOf(newMessage[((i >= mL) ? i % mL : i)]);
        let ki_s = keyUp[((i >= kL) ? i % kL : i)];
        let ki = alphabet.indexOf(ki_s);
        let letter = alphabet[(alphabet.length + mi + ki) % alphabet.length];
        result += letter;
      } else {
        result += newMessage[i];
      }
    }
    let newResult = '';
    let indexResult = 0;
    for (let i = 0; i < messageUp.length; i++) {
        if (!(alphabet.includes(messageUp[i]))) {
            newResult += messageUp[i];
        } else {
            newResult += result[indexResult];
            indexResult++;
        }
    }
    if (this.machineType === 'direct') {
      return newResult;
    } else {
      return newResult.split('').reverse().join('');
    }
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
        throw new Error('Incorrect arguments!');
    }
    
    let newMessage = '';
    let messageUp = message.toUpperCase();
    let keyUp = key.toUpperCase();
    for (let i = 0; i < messageUp.length; i++) {
        if (alphabet.includes(messageUp[i])) {
            newMessage += messageUp[i];
        }
    }

    let maxLength = Math.max(newMessage.length, keyUp.length);
    let result = '';
    let mL = newMessage.length;
    let kL = keyUp.length;
    for (let i = 0; i < maxLength; i++) {
      if (alphabet.includes(newMessage[i])) {
        let mi = alphabet.indexOf(newMessage[((i >= mL) ? i % mL : i)]);
        let ki_s = keyUp[((i >= kL) ? i % kL : i)];
        let ki = (-1) * alphabet.indexOf(ki_s);
        let letter = alphabet[(alphabet.length + mi + ki) % alphabet.length];
        result += letter;
      } else {
        result += newMessage[i];
      }
    }
    let newResult = '';
    let indexResult = 0;
    for (let i = 0; i < messageUp.length; i++) {
        if (!(alphabet.includes(messageUp[i]))) {
            newResult += messageUp[i];
        } else {
            newResult += result[indexResult];
            indexResult++;
        }
    }
    if (this.machineType === 'direct') {
      return newResult;
    } else {
      return newResult.split('').reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
