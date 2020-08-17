// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
    return "null";
  }
  if (obj === false) {
    return "false";
  }
  if (obj === 0) {
    return "0";
  }
  // Make array into string
  // Make object into string
  //`${key}: ${obj[key]}` recursively

};