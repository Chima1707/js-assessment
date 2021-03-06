if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {
      return function(arg) {
        return str + ', ' + arg;
      };
    },

    makeClosures : function(arr, fn) {
      var result = [];

      var makeFn = function(val) {
        return function() { return fn(val); };
      };
  
      for (var i = 0, len = arr.length; i < len; i++) {
        result.push(makeFn(arr[i]));
      }
  
      return result;
    },

    partial : function(fn, str1, str2) {
      return function(str3) {
        return fn(str1, str2, str3);
      };
    },

    useArguments : function() {
      var sum = 0;

      for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
      }
  
      return sum;
    },

    callIt : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1, arguments.length);
      fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1, arguments.length);
      return function() {
        var remainingArgs = args.concat(Array.prototype.slice.call(arguments));
        return fn.apply(null, remainingArgs);
      };
    },

    curryIt : function(fn) {

      return getArgumentAccumulator([], fn.length);
  
      function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
        return function (currentArgument) {
          accumulatedArguments.push(currentArgument);
  
          var allArgumentsProvided = accumulatedArguments.length === expectedArgumentsCount;
  
          if (allArgumentsProvided) {
            return fn.apply(null, accumulatedArguments);
          }
  
          return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
        };
      }
    }
  };
});
