// String
const fullName: string = 'Jon Doe';

// Numbers
const age: number = 25;

// Booleans
const isAlive: boolean = true;

// Arrays
const hobbits: string[] = ["Play", "Swimming"]
const favoriteColors: Array<string> = ["Black", "White"]

// Tuples
const fullInformation: [string, number, boolean, Array<string>, string[]] = [fullName, age, isAlive, hobbits, favoriteColors];

// PRINTING

console.log(`Hey my name is ${fullName}, I have ${age} years old. My hobbits are: ${hobbits.join(", ")} and my favorites colors are: ${favoriteColors.join(", ")}`)

console.log(`Hey my name is ${fullInformation[0]}, I have ${fullInformation[1]} years old. My hobbits are: ${fullInformation[3].join(", ")} and my favorites colors are: ${fullInformation[4].join(", ")}`)