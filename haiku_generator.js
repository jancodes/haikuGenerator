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
		var temp = haiku.dictionary[structure[i].toString()];
        var randomNum = Math.floor(Math.random() * temp.length);
        output.push(temp[randomNum]);
	}
	return output.join(" ") + " " + structure + " structure"
}

var arr = [5, 7, 5];
var test = createHaiku(arr);

console.log(test);
