var haiku = require('./haiku');
module.exports.createHaiku = createHaiku;
//var dictionary = haiku.dictionary;
//console.log(haiku.dictionary);

//console.log(typeof dictionary);

//console.log(haiku.dictionary);

function createHaiku(structure) {
	//console.log(structure);
	var output = [];
	for (var i = 0; i < structure.length; i++) {
		if (Array.isArray(structure[i])) {
			output.push(createHaiku(structure[i]));
		} else {
			var temp = haiku.dictionary[structure[i].toString()];
	        var randomNum = Math.floor(Math.random() * temp.length);
	        output.push(temp[randomNum].toString());			
		}
	}
	return output.join(" ").replace(/\[object Object\]/g, '');
}

// Can generate multi-dimensional arrays

var arr = [5,7,5];
var arr2 = [[1,2], [2,3,2], [1,4]];
var test = createHaiku(arr);
var test2 = createHaiku(arr2);

console.log(test);
console.log(test2)