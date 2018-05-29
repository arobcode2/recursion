// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
//example: JSON.stringify: [1, 2, 3, 4] => '[1, 2, 3, 4]'
//inputs: 1 object
//process: use a for in loop to go into the obj and look for every key and value pair and turn that into a string. Then concat everything together at the end.
//obj = 9, push input into an array, join it together and return it
var stringifyJSON = function(obj) {
    var result = [];
    for (var i = 0; i < 6; i++){
        result.push("" + obj[i] + "");
    }
    return result.join(",");
};
