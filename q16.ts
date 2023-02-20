//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
//and you have space for only two guests.

//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only 
//two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a 
//name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually 
//have an empty list at the end of your program.

let invited_guest: string [];
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

console.log("\n\n Only two peoples were invited for the dinner!");

console.log("\n Sorry you're not invited for dinner",invited_guest.pop());
console.log("\n Sorry you're not invited for dinner",invited_guest.pop());
console.log("\n Sorry you're not invited for dinner",invited_guest.pop());
console.log("\n Sorry you're not invited for dinner",invited_guest.pop());

console.log("\nYou're still invited for dinner", invited_guest[0]);
console.log("\nYou're still invited for dinner", invited_guest[1]);

invited_guest.pop();
invited_guest.pop();

console.log("List is empty now", invited_guest);