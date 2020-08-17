// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  return getElementsByClassNameWithNode(className, document.body);
};

var getElementsByClassNameWithNode = function(className, element) {
  let elements = [];
  if (element.classList && element.classList.contains(className)) {
    elements.push(element);
  }
  for (let child of element.childNodes) {
    elements = elements.concat(getElementsByClassNameWithNode(className, child));
  }
  return elements;
};