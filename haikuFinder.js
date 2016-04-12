var fs = require("fs");
var haiku = require('./haiku');
var bookFile = readbookFile('./prideandprejudice.txt');
//var bookFile = readbookFile('./test.txt');
//text.txt used to confirm haikuFinder.js works
//book takes a long time to complete, not many words match.

//left console.log uncommented to help visualize function
var findings = [];


function readbookFile(file){
  return fs.readFileSync(file).toString();
}

function findSyllables(word) {
	var temp = word.toUpperCase();
	for (var key in haiku.dictionary) {
		var check = haiku.dictionary[key].indexOf(temp);
		if (check >= 0) {
			return key
		}
	}
	return 0
}

function haiFinder(data) {
	var temp = [];
	var lines = data.toString().split(/\.|\?|\!/mg);
	var lineSplit;
	var firstFive = true;
	var secondSeven = false;
	var thirdFive = false;
	console.log("starting linesforeach...")
	// will not work for quotes since they end in "
	// will only work for 5, 7, 5 since the boolean is hard-coded
	lines.forEach(function(line) {
		lineSplit = line.replace(/\.|\?|\!|\,|\;|\n/mg, '').split(" ");
		for (var i = 0; i <	lineSplit.length; i++) {
			console.log("looping..." + lineSplit[i])
			var syllable = findSyllables(lineSplit[i]);
			console.log(syllable);
			if (firstFive == true && syllable == 5) {
				temp.push(lineSplit[i]);
				firstFive = false;
				secondSeven = true;
			} else if (secondSeven == true && syllable == 7) {
				temp.push(lineSplit[i]);
				secondSeven = false;
				thirdFive = true;
			} else if (thirdFive == true && syllable == 5) {
				temp.push(lineSplit[i]);
				thirdFive = false;
				firstFive = true;
				//findings.push(temp.join(" "));
				console.log("found: " + temp);
				temp = [];
			}
		};
	});
}

//console.log(bookFile)
haiFinder(bookFile);
//console.log(findings.join("\n"));