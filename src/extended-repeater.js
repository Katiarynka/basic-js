import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater(str, options) {
  
    let repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
    let separator = options.separator !== undefined ? options.separator  : '+';
     
    let addition = options.addition !== undefined ? options.addition : '';
    let additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 0;
    let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator  : '|';
    let resultAddition = '';
    
    if (additionRepeatTimes === 0 && addition != '') {additionRepeatTimes = 1}

    for (let i = 1; i <= additionRepeatTimes; i++) {
        
        if (i === additionRepeatTimes) {additionSeparator = ''}

        resultAddition = `${resultAddition}${addition}${additionSeparator}`;

    }

    let resultString = '';

    for (let i = 1; i <= repeatTimes; i++) {

        if (i === repeatTimes) {separator = ''}

        resultString = `${resultString}${str}${resultAddition}${separator}`

    }

    //console.log(resultString)
    return resultString;
}
