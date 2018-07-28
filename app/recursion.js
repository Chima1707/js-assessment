if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var files = [];
      var dir;
      if (dirName) {
        findDir(data);
      }
      function findDir(data) {
       if (data.dir === dirName) {
          dir = data;
       } else {
         var dirs = data.files.filter(function (file) {
            return typeof file !== 'string';
         });
         dirs.forEach(function (data) {
            findDir(data);
         });
       }
      }

      function recurse(data) {
        if (data.files && data.files.length) {
          data.files.forEach(function (file) {
          if (typeof file === 'string') {
            files.push(file);
          } else {
            recurse(file);
          }
          });
        }
      }
      if (dir) {
        recurse(dir);
      } else {
        recurse(data);
      }
      return files;
    },

    permute: function(arr) {
      var temp = [];
      var answer = [];
  
      function run() {
        var i;
        var len;
        var item;
  
        for (i = 0, len = arr.length; i < len; i++) {
          item = arr.splice(i, 1)[0];
          temp.push(item);
  
          if (arr.length) {
            run();
          } else {
            answer.push(temp.slice());
          }
          arr.splice(i, 0, item);
          temp.pop();
        }
  
        return answer;
      }
  
      return run();
    }
  };
});
