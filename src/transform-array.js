import { NotImplementedError } from '../extensions/index.js';

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
export default function transform(arr) {
  if (typeof arr !== 'object' || !(arr instanceof Array)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  let newArr = [];
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {

    if (arr[i] === '--discard-prev') {

      if ((i > 1 && arr[i - 2] !== '--discard-next' || i <= 1) && newArr.length > 0) {
        newArr.pop();
      }

    }

    else if (arr[i] === '--discard-next') { }
    else if (arr[i] === '--double-next') {
      if (i + 1 < arrLength) {
        newArr.push(arr[i + 1]);
        newArr.push(arr[i + 1]);
      }
    }
    else if (arr[i] === '--double-prev') {

      if ((i > 1 && arr[i - 2] !== '--discard-next' || i <= 1) && newArr.length > 0) {
        newArr.push(newArr[newArr.length - 1]);
      }

    }
    else {

      if ((i > 0 && arr[i - 1] === '--double-next') ||
        (i > 0 && arr[i - 1] === '--discard-next')
      ) { }
      else {
        newArr.push(arr[i])
      }

    }

  }

  return newArr;
}
