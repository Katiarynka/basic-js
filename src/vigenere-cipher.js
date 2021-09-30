import { NotImplementedError } from '../extensions/index.js';

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
export default class VigenereCipheringMachine {

  constructor(direct) {
    this.direct = direct === undefined ? true : direct;
  }

  encrypt(message, key) {

    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }

    let abc = [];
    for (let i = 65; i <= 90; i++) {
      abc.push(String.fromCharCode(i))
    }

    for (let i = 97; i <= 122; i++) {
      abc.push(String.fromCharCode(i))
    }

    let keyString = '';
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      if (!abc.includes(message[i])) {
        keyString = `${keyString}${message[i]}`
      }
      else {
        keyString = `${keyString}${key[j]}`
        j++;
        j = j === key.length ? 0 : j;
      }

    }

    let result = [];

    for (let i = 0; i < message.length; i++) {

      if (!abc.includes(message[i])) {
        result.push(message[i])
      }
      else {

        let letterIndex = abc.indexOf(message[i]);
        let shift = abc.indexOf(keyString[i]);

        result.push(abc[(letterIndex + shift) % abc.length]);

      }

    }

    if (!this.direct) {
      return result.reverse().join('').toUpperCase()
    }
    return result.join('').toUpperCase();
  }

  decrypt(message, key) {

    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }

    let abc = [];
    for (let i = 65; i <= 90; i++) {
      abc.push(String.fromCharCode(i))
    }

    for (let i = 97; i <= 122; i++) {
      abc.push(String.fromCharCode(i))
    }

    let keyString = '';
    let j = 0;

    message.toLowerCase();

    for (let i = 0; i < message.length; i++) {
      if (!abc.includes(message[i])) {
        keyString = `${keyString}${message[i]}`
      }
      else {
        keyString = `${keyString}${key[j]}`
        j++;
        j = j === key.length ? 0 : j;
      }

    }

    let result = [];

    for (let i = 0; i < message.length; i++) {

      if (!abc.includes(message[i])) {
        result.push(message[i])
      }
      else {

        let letterIndex = abc.indexOf(message[i]);
        let shift = abc.indexOf(keyString[i]);

        result.push(abc[(letterIndex - shift + abc.length) % abc.length]);

      }

    }

    if (!this.direct) {
      return result.reverse().join('').toUpperCase()
    }
    return result.join('').toUpperCase();

  }
}
