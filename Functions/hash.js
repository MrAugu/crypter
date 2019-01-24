class Hash {

  /**
  * @property {string} string - A string that will be hashed.
  * @returns {number} hash - A 32bit integer, hash of the string input.
  */

  static hash (string) {

    var hash = 0;

    if (string.length == 0) {
      return hash;
    }

    for (var i = 0; i < string.length; i++) {
      var char = string.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }

    return hash;
  }
}

module.exports = Hash;
