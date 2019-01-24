const hasher = require("./hash.js");

class Validator {

  /**
  * @property {number} providedHash - Hash of a value.
  * @property {string} str - Value to be compared with the hash.
  * @returns {boolean} - Whether validation passed or not.
  */

  static validate (providedHash, str) {
    const strHash = hasher.hash(str);
  
    if (providedHash === strHash) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Validator;
