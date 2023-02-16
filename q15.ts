//More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of 
//  your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest 
//  to the end of your list. • Print a new set of invitation messages, one for each person 
//  in your list.

let invited_guest:string [];
invited_guest = ["abdullah", "shan", "faizan"];

console.log(invited_guest[0] + " \nInvited on dinner");
console.log(invited_guest[1] + " Sorry can't make it to dinner");
console.log(invited_guest[2] + " Invited on dinner");

console.log("\n");
delete(invited_guest[1]);
invited_guest[1] = "jahanzaib";

console.log(invited_guest[0] + " \nInvited on dinner");
console.log(invited_guest[1] + " Sorry can't make it to dinner");
console.log(invited_guest[2] + " Invited on dinner");

console.log("\nWe found a bigger dinner table")
invited_guest.push("usama");
invited_guest.push("sudais");
invited_guest.push("talha");

console.log(invited_guest[0] + " Invited on dinner");
console.log(invited_guest[1] + " Invited on dinner");
console.log(invited_guest[2] + " Invited on dinner");
console.log(invited_guest[3] + " Invited on dinner");
console.log(invited_guest[4] + " Invited on dinner");
console.log(invited_guest[5] + " Invited on dinner");

