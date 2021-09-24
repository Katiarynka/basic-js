import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(/*date*/) {

  /* function isValidDate(date) {
    return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
  }

  if (date === undefined) {
    return 'Unable to determine the time of year!'
  }

  if (!isValidDate(date)) {
    return 'Invalid date!'
  }

  let month = date.getMonth()
  if (month < 2 || month === 11) { return 'winter' }
  if (month < 5) { return 'spring' }
  if (month < 8) { return 'summer' }
  if (month < 11) { return 'fall' } */
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
