// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === undefined) {
    return '';
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof(obj) === 'number' || typeof(obj) === 'boolean') {
    return obj.toString();
  }
  if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    var arrayString = '[';
    for (var i = 0; i < obj.length; i ++) {
      arrayString += stringifyJSON(obj[i]);
      if (i < obj.length - 1) {
        arrayString += ',';
      }
    }
    arrayString += ']';
    return arrayString;
  }
  if (typeof(obj) === 'object' && !Array.isArray(obj)) {
    var objectString = '{';
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      var value = stringifyJSON(obj[keys[i]]);
      if (value) {
        objectString += '"' + keys[i] + '"' + ':' + value;
        if (i < keys.length - 1) {
          objectString += ',';
        }
      }
    }
    objectString += '}';
    return objectString;
  }
};