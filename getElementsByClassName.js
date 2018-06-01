var getElementsByClassName = function(className, index) {
	var element = index || document.body;
  	var result = [];
  	if(_.contains(element.classList, className)) {
  		result.push(element);
  	}
  	for(var i = 0; i < element.childNodes.length; i++) {
  		result = result.concat(getElementsByClassName(className, element.childNodes[i]));
  	}
  	return result;
};