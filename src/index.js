
// You should implement your task here.


module.exports = function towelSort (matrix) {
  let resultArr = [];
  if (matrix == [] || matrix == undefined) {
    resultArr = [];
  }
  else {
    for (let i = 0; i < matrix.length; i++){
      if (i%2 != 0) {
        matrix[i] = matrix[i].sort((a,b) => b-a);
      }
      resultArr = resultArr.concat(matrix[i]);
    }
}
  return resultArr;
}
