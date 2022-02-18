
// You should implement your task here.
function towelSort (matrix) {
  let resultArr = [];
  for (let i = 0; i < matrix.length; i++){
    resultArr = resultArr.concat(matrix[i]);
  }
  // console.log (resultArr);
  resultArr.sort((a,b) => a-b)
  // console.log (resultArr);
  
}


module.exports = function towelSort (matrix) {
  return [];
}
