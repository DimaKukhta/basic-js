const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    if (value === undefined) this.arr.push(``);
    this.arr.push(`${value}`);
    return this;
  },

  removeLink(position) {
    if (typeof position === 'number' || 
      this.arr.indexOf(`${position}`) !== -1) {
      this.arr.splice(position - 1, 1)
      return this;

    } else {
      this.arr = [];
      throw new Error('ERROR');
    }
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    let result = this.arr.map(el => `( ${el} )`).join('~~');
    this.arr = [];
    return result;
  }
};

module.exports = chainMaker;
