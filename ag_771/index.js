/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function (j, s) {
  const arrJ = new Set(j.split(''));
  return s.split('').reduce((acc, curr) => arrJ.has(curr) ? acc + 1 : acc, 0);
};

console.log('numJewelsInStones :>> ', numJewelsInStones('aA', 'aAAbbbb'));