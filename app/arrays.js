if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
      return arr.reduce(function (accum, curr) {
        return accum + curr;
      }, 0);
    },

    remove : function(arr, item) {
      return arr.filter(function (elem) {
        return item !== elem;
      });
    },

    removeWithoutCopy : function(arr, item) {
      var temp = this.remove(arr, item);
      arr.length = 0;
      temp.forEach(function (elem) {
        arr.push(elem);
      });
      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
     arr.pop();
     return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      arr.shift();
      return arr;
    },

    concat : function(arr1, arr2) {
     return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
     arr.splice(index, 0, item);
     return arr;
    },

    count : function(arr, item) {
      var counter = 0;
      arr.forEach(function (elem) {
        if (elem === item) {
          counter++;
        }
      });
      return counter;
    },

    duplicates : function(arr) {
      var indices = {};
      arr.forEach(function (elem, index) {
        if(arr.indexOf(elem) !== index && !indices[elem]) {
          indices[elem] = true;
        }
      });
      return Object.keys(indices);
    },

    square : function(arr) {
      return arr.map(function (elem) {
        return Math.pow(elem, 2);
      });
    },

    findAllOccurrences : function(arr, target) {
      return arr.reduce(function (result, elem, index) {
        if (elem === target) {
          result.push(index);
        }
        return result;
      }, []);
    }
  };
});
