/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let total = 0;
  let isSold = true;
  let incomePrice = 0;
  for (let i = 0; i < prices.length; i++) {
    const nextPrice = prices[i + 1] || 0;
    const toDayPrice = prices[i];
    if (nextPrice < toDayPrice && !isSold) {
      total += toDayPrice - incomePrice;
      isSold = true;
    }
    if (nextPrice > toDayPrice && isSold) {
      incomePrice = toDayPrice;
      isSold = false;
    }
  }
  return total;
};

const res = maxProfit([7,6,4,3,1]);
console.log("res", res)
