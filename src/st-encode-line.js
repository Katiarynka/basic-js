import { NotImplementedError } from '../extensions/index.js';

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
export default function encodeLine(str) {
  
  if (str.length === 0) { return '' }

  let resultStr = '';
  let counter = 0;
  let currentLeter = '';

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      counter = 1;
      currentLeter = str[i];
    }
    else if (str[i] === currentLeter) {
      counter++
    }
    else {
      resultStr = `${resultStr}${counter === 1 ? '' : counter}${currentLeter}`

      counter = 1;
      currentLeter = str[i];
    }

  }
  resultStr = `${resultStr}${counter === 1 ? '' : counter}${currentLeter}`

  return resultStr;

}
