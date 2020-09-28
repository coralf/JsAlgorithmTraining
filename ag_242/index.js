/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => s.length === t.length && s.split('').sort().toString() === t.split('').sort().toString() || false;
console.log('isAnagram :>> ', isAnagram('rat', 'car'));

