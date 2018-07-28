if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
      var api = {
        sayIt: function () {
          return this.greeting + ', ' + this.name;
        },
        name: str2,
        greeting: str1
      };
      return api;
    }
  };
});

