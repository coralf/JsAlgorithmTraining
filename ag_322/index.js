//1,5,20,25
const coins = (n) => {
  if (n < 1) return Number.MAX_VALUE;
  if (n === 1 || n === 20 || n === 5 || n === 25) return 1;
  let min1 = Math.min(coins(n - 1), coins(n - 5));
  let min2 = Math.min(coins(n - 20), coins(n - 25));
  return Math.min(min1, min2) + 1;
}

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
  console.log('coins(41) :>> ', coins(coins));
};




coinChange(41, []);

