
function matrixSetZero(m) {

  var rows = {}
  var cols = {}

  for(var row = 0; row < m.length; row++) {


    for(var col = 0; col < m.length; col++) {
      if(rows[row]) {
        m[row][col] = 0;
      }
      if(cols[row]) {
        m[row][col] = 0;
      }
      if(m[row][col] === 0) {
        rows[row] = true;
        cols[col] = true;
      }
    }
    if(rows[row]){
      m[row][col] = 0;
    }


  }
  return m

}



var m = [[1, 0, 2, 3],
     [4, 5, 6, 7],
     [8, 9, 10, 0]]

console.log(matrixSetZero(m));