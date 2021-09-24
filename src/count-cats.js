import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  function findTheCat(value) {
    return value === '^^';
  }

  const reducer = (previousValue, currentValue) => previousValue + currentValue;

  function findTheCats(array) {
    return array.filter(findTheCat).length
  }

  let arrayWithCats = matrix.map(findTheCats);
    if (arrayWithCats.length === 0) {
        return 0;
    }
    return arrayWithCats.reduce(reducer)
}
