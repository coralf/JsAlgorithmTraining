/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  const rows = [];
  const cols = [];
  const boxes = [];

  for (let i = 0; i < 9; i++) {
    for (let k = 0; k < 9; k++) {
      const value = board[i][k];
      if (value === '.') continue;
      const boxIdx = Math.floor(i / 3) * 3 + Math.floor(k / 3);
      if (!rows[i]) rows[i] = [];
      if (!cols[k]) cols[k] = [];
      if (!boxes[boxIdx]) boxes[boxIdx] = [];

      if (!rows[i].includes(value)) {
        rows[i].push(value);
      } else {
        return false;
      }

      if (!cols[k].includes(value)) {
        cols[k].push(value);
      } else {
        return false;
      }

      if (!boxes[boxIdx].includes(value)) {
        boxes[boxIdx].push(value);
      } else {
        return false;
      }
    }
  }
  return true;
}



// console.log(isValidSudoku([["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]));
// @lc code=end

