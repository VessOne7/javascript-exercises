const fibonacci = function(num) {
  let arr = [0, 1];
  for (let i = 2; i <= num; i++){
    arr.push(arr[i-1] + arr[i-2]);
  }
  if (num < 0) {
    return "OOPS";
  }
  return arr[num];
};

// Do not edit below this line
module.exports = fibonacci;
