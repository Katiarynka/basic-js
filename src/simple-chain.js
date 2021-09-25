import { NotImplementedError } from '../extensions/index.js';

export default {

  chain: [],

  getLength() {
    return this.chain.length
  },

  addLink(value) {
    this.chain.push(value)
    return this
  },

  removeLink(position) {
    if (typeof(position) != 'number' || position > this.getLength() || position <= 0) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this
  },

  reverseChain() {
    this.chain.reverse();
    return this
  },

  finishChain() {
    let strChain = '';
    for (let i = 0; i < this.chain.length; i++) {
      strChain = `${strChain}${i === 0 ? '' : '~~'}( ${this.chain[i]} )`
    }

    this.chain = []

    return strChain;
  }
};
