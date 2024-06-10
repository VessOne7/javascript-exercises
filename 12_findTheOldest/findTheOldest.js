const findTheOldest = function(people) {
   let oldest = {
    yearOfBirth: 0,
    yearOfDeath: 0
   };
   let currentYear = new Date();
   people.forEach(function(item) {
    if ((item.yearOfDeath > 1) && (oldest.yearOfDeath >= 0)) {
        if ((item.yearOfDeath - item.yearOfBirth) > ((oldest.yearOfDeath - oldest.yearOfBirth))) {
          oldest = item;
      }
      } else if (oldest.yearOfDeath == undefined){
        if ((item.yearOfDeath - item.yearOfBirth) > ((currentYear.getFullYear() - oldest.yearOfBirth))) {
            oldest = item;
        }
      } else if ((currentYear.getFullYear() - item.yearOfBirth) > ((oldest.yearOfDeath - oldest.yearOfBirth))){
        oldest = item;
    }
   })
   return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
