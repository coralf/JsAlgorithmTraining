
class Queens {

  constructor() {
    this.queens = [];
    this.layouts = [];
    this.way = 0;
  }


  addToLayout = () => {
    const queensLayout = [];
    for (let row = 0; row < this.queens.length; row++) {
      queensLayout[row] = '';
      for (let clo = 0; clo < this.queens.length; clo++) {
        if (this.queens[row] === clo) {
          queensLayout[row] += 'Q'
        } else {
          queensLayout[row] += '.';
        }
      }
    }
    return queensLayout;
  }
  isValid = (row, clo) => {
    for (let i = 0; i < row; i++) {
      if (this.queens[i] === clo) return false;
      if (row - i === Math.abs(clo - this.queens[i])) return false;
    }
    return true;
  }

  place = (row, n) => {
    if (row === n) {//当行数与皇后数量相等的时候有一种方法可以摆放
      this.way++;
      this.layouts.push(this.addToLayout());
      console.log('row :>> ', this.addToLayout());
      return this.layouts;
    }

    for (let i = 0; i < n; i++) {
      if (this.isValid(row, i)) {//如果可以摆放就一个皇后，并且摆放下一个皇后
        this.queens[row] = i;
        this.place(row + 1, n);
      }
    }
  }
}

/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function (n) {
  return new Queens().place(0, n);
};
solveNQueens(4);