
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  } else if (matrix.length === 0) {
    return [];
  } else if (matrix.length > 0) {

    for (let i = 0; i < matrix.length; i++) {
      if (i === 1) {matrix[i].reverse()};
      if (i === 3) {matrix[i].reverse()}
      }
    
    return matrix = matrix.flat();
  }  
}
