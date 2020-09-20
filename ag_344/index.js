/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  const times = parseInt(s.length / 2);
  for (let i = 0; i < times; i++) {
    const temp = s[i];
    s[i] = s[s.length - i - 1]
    s[s.length - i - 1] = temp;
  }
};


const strArr = ["h", "e", "l", "l", "o"];
reverseString(strArr);
console.log('strArr', strArr)

