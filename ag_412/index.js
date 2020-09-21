
/**
 * @param {number} n
 * @return {string[]}
 */

const Fizz = 'Fizz';
const Buzz = 'Buzz';

const fizzBuzz = function (n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    const isThree = i % 3 === 0
    const isFive = i % 5 === 0;
    if (isFive && isThree) {
      arr.push(`${Fizz}${Buzz}`);
    } else if (isFive) {
      arr.push(Buzz);
    } else if (isThree) {
      arr.push(Fizz);
    } else {
      arr.push(i.toString());
    }
  }
  return arr;
};
const arr = fizzBuzz(3);
console.log("arr", arr)