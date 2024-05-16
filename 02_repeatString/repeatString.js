const repeatString = function(string, num) {
  let theString = "";
  if (num < 0) {
    return "ERROR";
  }
  for (let i = 0; i < num; i++){
    theString = theString.concat(string);
  }
  return theString;
};

// Do not edit below this line
module.exports = repeatString;
