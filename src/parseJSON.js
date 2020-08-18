// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // Easy
  if (json.indexOf('null') >= 0) {
    return null;
  }
  if (json.indexOf('true') >= 0) {
    return true;
  }
  if (json.indexOf('false') >= 0 ) {
    return false;
  }
  if (typeof Number(json[0]) === 'number') {
    return Number(json[0]);
  }

  if (json[0] === '"') {
    var end = json.indexOf('"', 1);
    return json.split(1, end);
  }

  // Hard

};
