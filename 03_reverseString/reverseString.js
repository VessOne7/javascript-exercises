const reverseString = function(text) {
  //extract the last symbol from the text and add it to a new variable
  //delete the last symbol in the text
  let reverseText = '';
  for (let i = 0; i <= text.length; i++){
    reverseText += text.substr(text.length-i, 1);
  }
  return reverseText
};

// Do not edit below this line
module.exports = reverseString;
