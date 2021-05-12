// String
var fullName = 'Jon Doe';
// Numbers
var age = 25;
// Booleans
var isAlive = true;
// Arrays
var hobbits = ["Play", "Swimming"];
var favoriteColors = ["Black", "White"];
// Tuples
var fullInformation = [fullName, age, isAlive, hobbits, favoriteColors];
// PRINTING
console.log("Hey my name is " + fullName + ", I have " + age + " years old. My hobbits are: " + hobbits.join(", ") + " and my favorites colors are: " + favoriteColors.join(", "));
console.log("Hey my name is " + fullInformation[0] + ", I have " + fullInformation[1] + " years old. My hobbits are: " + fullInformation[3].join(", ") + " and my favorites colors are: " + fullInformation[4].join(", "));
