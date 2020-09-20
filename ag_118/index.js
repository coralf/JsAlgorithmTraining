/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  const arr = [];
  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      const lastRow = arr[i - 1];
      const left = lastRow && lastRow[j - 1];
      const right = lastRow && lastRow[j];
      if (left && right) {
        row[j] = left + right;
      } else {
        row[j] = left || right || 1;
      }
    }
    arr[i] = row;
  }
  return arr;
};

const arr = generate(5);
console.log("arr", arr)