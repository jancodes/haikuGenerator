var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');
var dictionary = {};

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function formatData(data){    
   var lines = data.toString().split("\n"),
       lineSplit
   lines.forEach(function(line){    
    lineSplit = line.split("  ");    
    //console.log("The word " + lineSplit[0] + " has this phoneme layout: " + lineSplit[1]); 
    if (!lineSplit[0].includes("(") && lineSplit[0] != null && lineSplit[1] != null && lineSplit[0] != null && lineSplit[1] != undefined) {
	    var splitIt = lineSplit[1].match(/(\d)/g)
	    if (splitIt != null) {
		    var syllablesCount = lineSplit[1].match(/(\d)/g).length.toString();
		    if (dictionary[syllablesCount] == undefined)
		    	dictionary[syllablesCount] = [];
		    else
		    	dictionary[syllablesCount].push(lineSplit[0])    	    	
	    }	
    }
  });   
}

formatData(cmudictFile);

//console.log(dictionary);

console.log(dictionary["5"][0]);
console.log(dictionary["7"][2]);
console.log(dictionary["5"][3]);

module.exports.dictionary = dictionary;