const palindromes = function (str) {
    let a = str.toLowerCase().split('').filter(item => {
      return /[a-zA-z0-9]/.test(item);
    }).reverse().join();

    let b = str.toLowerCase().split('').filter(item => {
        return /[a-zA-z0-9]/.test(item);
      }).join();
  
     return b === a;
};

// Do not edit below this line
module.exports = palindromes;
