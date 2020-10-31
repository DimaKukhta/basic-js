const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let addition = "";
  if (options.addition !== undefined) {
      addition = String(options.addition);
  }

  let addResult = addition;

  str = String(str);

  let sep = options.separator ? options.separator : "+";
  let addSep = options.additionSeparator ? options.additionSeparator : "|";

  if (addition) {
      for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
          addResult += addSep + addition;
      }
  }

  let result = str + addResult;
  for (let i = 0; i < options.repeatTimes - 1; i++) {
      if (addition) {
          result += sep + str + addResult;
      } else {
          result += sep + str;
      }
  }
  return result;
};
  