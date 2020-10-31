const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;

    arr = arr.filter(item => Array.isArray(item));
    if (arr.length > 0) {
      arr = arr.flat();
      depth += this.calculateDepth(arr);
    }
    return depth; 
  }
};