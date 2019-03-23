module.exports = function solveSudoku(matrix) {
  if (solution(matrix, 0, 0)){
		return matrix;
	}
}

//main function
function solution(matrix, row, col) {
	var cell = findEmpty(matrix, row, col);
	if (!cell) {
		return true;
	}
	row = cell[0];
	col = cell[1];

	for (var num = 1; num <= 9; num++) {
		if (!checkRow(matrix, row, col, num)) {   
			matrix[row][col] = num;
			if (solution(matrix, row, col) ) {                
				return true;
			}  
			matrix[row][col] = 0;
		}
	}
return false;
}

//finding empty cell
function findEmpty(matrix, row, col) {
	for (let i = 0; i < 9; i++){
		for (let j = 0; j < 9; j++){
			if (matrix[i][j] == 0) {
				return [i, j];
            }	
		}
	}
    return null;
}

//checking row
function checkRow(matrix, row, col, num){	
	for (var i = 0; i < 9; i++){
		if (matrix[row][i] == num || matrix[i][col] == num){
			return true;
		}
	}
	let r = Math.floor(row - row%3);
	let c = Math.floor(col - col%3);

	for (let i = r; i < r+3; i++) {
		for (let j = c; j < c+3; j++) {
			if (matrix[i][j] == num) {
				return true;
			}
		}
	}
	return false;	
} 