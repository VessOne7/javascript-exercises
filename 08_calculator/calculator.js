const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(arr) {
	return arr.reduce((total, num) => total + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, num) => total * num, 1);
};

const power = function(numOne, numTwo) {
	return Math.pow(numOne, numTwo);
};

const factorial = function(num) {
  let result = 1;
	for (let i = num; i > 0; i--) {
    result = result * i;
  } 
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
