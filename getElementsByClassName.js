// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(element, className) {
  var result = [];
  if(element.contains(className)) {
  	result.push(element);
  }

  $("body").each(function(node) {
  	if (node === $("div") || node === $("span")) {
  		result.push(getElementsByClassName("someParam"));
  	}
  })
  return result;
};
