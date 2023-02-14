//Stripping Names: Store a person’s name, and include some whitespace characters at 
//the beginning and end of the name. Make sure you use each character combination, "\t" 
//and "\n", at least once. Print the name once, so the whitespace around the name is 
//displayed. Then print the name after striping the white spaces.

var famousPerson:string = "Allama Iqbal";
var famousQuote:string = "Failure is not fatal until we surrender; trying again is the key to glorious victory.";

var textSequence:string = `\t${famousPerson} once said, \n\t\t"${famousQuote}"`

console.log(textSequence);