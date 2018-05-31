// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	var element = document.body;
  	var result = [];
  	if(element.classList.contains(className)) {
  		return element;
  	}
  	//document.body.childNodes provides elements
  	for(var i = 0; i < element.childNodes; i++) {
  		if (element.childNodes[i].contains(className)) {
  			result.push(getElementsByClassName(childNodes[i]));
  		}
  	}
  	return result;
};
