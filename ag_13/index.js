/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const m = new Map();
  m.set('I', 1);
  m.set('V', 5);
  m.set('X', 10);
  m.set('L', 50);
  m.set('C', 100);
  m.set('D', 500);
  m.set('M', 1000);
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const currNum = m.get(s[i]);
    const nextNum = s[i + 1] && m.get(s[i + 1]) || 0;
    if (nextNum !== 0 && nextNum > currNum) {
      total += (nextNum - currNum);
      i++;
    } else {
      total += currNum
    }
  }
  return total;
};

const res = romanToInt('IV');
console.log('res :>> ', res);