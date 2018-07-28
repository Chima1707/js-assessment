if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      var timeout;
      function run () {
        console.log(start++);
  
        if (start <= end) {
          timeout = setTimeout(run, 100);
        }
      }
  
      run();
  
      return {
        cancel: function () {
          if(timeout){
            clearTimeout(timeout);
          }
        }
      };
    }
  };
});