const removeFromArray = function(array, ...removedNum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < removedNum.length; j++){
      if (array[i] === removedNum[j]) {
          array.splice(i, 1);
          i = 0;
      }
    }
  }
  return array
};

// Do not edit below this line
module.exports = removeFromArray;
