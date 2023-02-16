//Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone 
//else to invite.

let invited_guests:string [];
invited_guests = ["abdullah", "shan", "faizan"];

console.log(invited_guests[0] + " \nInvited on dinner");
console.log(invited_guests[1] + " Sorry can't make it to dinner");
console.log(invited_guests[2] + " Invited on dinner");

delete(invited_guests[1]);
invited_guests[1] = "jahanzaib";

console.log(invited_guests[0] + " \nInvited on dinner");
console.log(invited_guests[1] + " Sorry can't make it to dinner");
console.log(invited_guests[2] + " Invited on dinner");

