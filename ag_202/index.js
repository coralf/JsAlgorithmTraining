/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  const records = new Map();
  let strN = n.toString();
  while (true) {
    const res = strN.split('').reduce((acc, curr) => acc + Math.pow(curr, 2), 0);
    if (res === 1) return true;
    if (records.get(res) > 1) return false;
    records.set(res, (records.get(res) || 0) + 1);
    strN = res.toString();
  }

};
const res = isHappy(19);
