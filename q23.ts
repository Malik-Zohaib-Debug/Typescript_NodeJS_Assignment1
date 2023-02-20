// More Conditional Tests: You don’t have to limit the number of tests 
//you create to 10. If you want to try more comparisons, 
//write more tests. Have at least one True and one False result for 
//each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater 
//than and less than, greater than or equal to, and less than or 
//equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let test:string ="equal"
console.log(test=="equal") // true
console.log(test!="equal") // false

test="equal"
console.log(test.toLowerCase()=="equal") // true

let val:number = 10;
console.log(val>10); // false
console.log(val<10); // false
console.log(val<=10); // true
console.log(val>=10); // true

val=10;
console.log(val==10);
console.log(val!=10);
if(val<=8 && val>=10){
   console.log(" ..");
    
}
if (val<=8 || val>=10){
    console.log("---");
}