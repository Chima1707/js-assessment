if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
      function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }
      function isDivisibleBy(x) {
        return function (n) {
          return n % x === 0;
        };
      }
      var isDivisibleBy3 = isDivisibleBy(3);
      var isDivisibleBy5 = isDivisibleBy(5);

      
      if (!isNumber(num)) {
        return false;
      }
      if (isDivisibleBy3(num) && isDivisibleBy5(num)) {
        return 'fizzbuzz';
      }
      if (isDivisibleBy3(num)) {
        return 'fizz';
      }
      if (isDivisibleBy5(num)) {
        return 'buzz';
      }
      return num;

      // write a function that receives a number as its argument;
      // if the number is divisible by 3, the function should return 'fizz';
      // if the number is divisible by 5, the function should return 'buzz';
      // if the number is divisible by 3 and 5, the function should return
      // 'fizzbuzz';
      //
      // otherwise the function should return the number, or false if no number
      // was provided or the value provided is not a number
    }
  };
});
