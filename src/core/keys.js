//= require _package.js

triflow.keys = function(map) {
  var keys = [];
  for (var key in map) {
    keys.push(key);
  }
  return keys;
};
