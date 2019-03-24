module.exports = function solveSudoku(matrix) {
  const valid = (x,y) => {
      var v = [];
      for(var i=0; i<3; i++) {
        for(var j=0; j<3; j++) {
          v.push(matrix[x][i*3+j])
          v.push(matrix[i*3+j][y])
          v.push(matrix[3*Math.floor(x/3)+i][3*Math.floor(y/3)+j])
        }
      }
      return [1,2,3,4,5,6,7,8,9].filter(e => v.indexOf(e) == -1)
    }
    const rec = (x,y) => {
      if(y == 9) {
        return matrix
      } else if (!matrix[x][y]) {
        const correct = valid(x,y).some(i => {
          matrix[x][y] = i;
          return rec((x+1)%9,y+(x==9?1:0))
        })
        if (correct)
          return matrix;
        matrix[x][y] = 0;
      } else {
        return rec((x+1)%9,y+(x==8?1:0))
      }
    }
    return rec(0,0)
}

