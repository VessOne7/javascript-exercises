const sumAll = function(firstNum, lastNum) {
    let sum = 0;
    if(((firstNum && lastNum) <= 0) || (typeof (firstNum || lastNum) != number)) {
        return "ERROR"
    } else if (firstNum < lastNum) {
          for (let i = firstNum; i <= lastNum; i++) {
          sum += i;
        }
      return sum
    } else {
        for (let i = lastNum; i <= firstNum; i++) {
            sum += i;
        }
        return sum
    }
};

// Do not edit below this line
module.exports = sumAll;
