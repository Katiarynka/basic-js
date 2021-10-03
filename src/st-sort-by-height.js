import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  
  for (let i = arr.length - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
        if (arr[j] !== -1) {
            if (arr[j + 1] === -1) {
                for (let k = j + 2; k <= i + 1; k++) {
                    if (arr[k] !== -1) {
                        if (arr[j] > arr[k]) {
                            let temp = arr[j];
                            arr[j] = arr[k];
                            arr[k] = temp;
                        }
                        break
                    }
                }
            }
            else if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
return arr;
}
