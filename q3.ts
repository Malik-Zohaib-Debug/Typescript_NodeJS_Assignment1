//Name Cases: Store a person’s name in a variable, and then print that person’s name 
//in lowercase, uppercase, and titlecase.

var personName:string = "Abdullah";

var personTitleCase:string = personName.charAt(0).toUpperCase() + personName.slice(1); 

console.log("Lowercase -> ", personName.toLowerCase());
console.log("Uppercase -> ", personName.toUpperCase());
console.log("Titlecase -> ", personTitleCase);