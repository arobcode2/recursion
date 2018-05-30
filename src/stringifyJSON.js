// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
//example: JSON.stringify: [1, 2, 3, 4] => '[1, 2, 3, 4]'
//inputs: 1 object
//process: use a for in loop to go into the obj and look for every key and value pair and turn that into a string. Then concat everything together at the end.
//obj = 9, push input into an array, join it together and return it
var stringifyJSON = function(obj) {
	var result = [];
	var resultObj = [];

	if (typeof obj === 'number' || typeof obj === 'boolean') {
		return obj.toString();
	}

	else if (typeof obj === 'string') {
    	return '"' + obj + '"';
    } 

    else if (typeof obj === 'object') {
    	if (obj === null) {
    	return "" + obj + "";
    }

    	if (Array.isArray(obj)) {
    		if (obj.length === 0) {
    			return '[]';
    		}

    		if (obj.length > 0) {
    			for (var i = 0; i < obj.length; i++) {
    				result.push(stringifyJSON(obj[i]));
    			}
    		}

    		return '[' + result + ']';
    	} 
    	else {
//     	    if (typeof obj === 'function' || typeof obj === 'undefined') {
//               return '{}';
//             }
    		if (Object.keys(obj).length === 0) {
    			return '{}';
    		}
    		else if(Object.keys(obj).length > 0) {
    			for (var key in obj) {
    			    if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
    			      return '{}';
    			    }
    			    else {
    				resultObj.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    			    }
    			}
    		}
    		return"{" + resultObj.toString() + "}";
    	}

   	}
};



//loop
//stringifyJSON(obj[i])