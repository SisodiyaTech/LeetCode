/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
     let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let subArr = "";
    for (let j = 0; j < prefix.length; j++) {
      if (prefix[j] === strs[i][j]) {
        subArr += strs[i][j];
      } else {
        break;
      }
    }
    prefix = subArr;
  }
  return prefix;
};