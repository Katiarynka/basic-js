import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  
  let strMacAddress = '';
  for (let i = 0; i < 6; i++) {
    strMacAddress = `${strMacAddress}[0-9A-F][0-9A-F]${i === 5 ? '': '-'}`    
  }

  let regExpMAC = new RegExp(strMacAddress);

  return regExpMAC.test(n);

}
