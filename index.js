// Iteration 1: Names and Input

const hacker1 = "Manuel";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Patricio";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `The navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length}`);
}
// Iteration 3: Loops

let driversName = "";

for (const letters of hacker1) {
  driversName += letters.toLocaleUpperCase() + " ";
}

console.log(driversName);

let navigatorsName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorsName += hacker2[i];
}

console.log(navigatorsName);

let compareStr = hacker1.localeCompare(hacker2);
console.log(compareStr);

switch (compareStr) {
  case 1:
    console.log(`The driver's name goes first.`);
    break;
  case -1:
    console.log(`Yo, the navigator goes first definitely.`);
    break;
  default:
    console.log(`What?! You both have the same name?`);
}

// Bonus 1

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et fermentum ante. Phasellus scelerisque, eros et aliquet sollicitudin, magna metus suscipit libero, in bibendum ligula ante fringilla orci. Nullam pellentesque lobortis mauris, in aliquam risus venenatis ut. Quisque ac quam ut sem interdum pretium. Donec quis lobortis sapien, non volutpat ante. Donec nibh felis, lobortis ac condimentum vitae, congue ac felis. Integer fringilla massa sit amet euismod pretium. Nulla et augue mauris. Donec eget luctus velit, quis ultrices mauris. Sed magna felis, eleifend vitae ornare accumsan, suscipit sed eros. Vivamus condimentum mauris nec tortor fermentum rutrum. Vestibulum eget ipsum mi. Sed rhoncus porta ligula, in euismod odio fringilla eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et fermentum ante. Phasellus scelerisque, eros et aliquet sollicitudin, magna metus suscipit libero, in bibendum ligula ante fringilla orci. Nullam pellentesque lobortis mauris, in aliquam risus venenatis ut. Quisque ac quam ut sem interdum pretium. Donec quis lobortis sapien, non volutpat ante. Donec nibh felis, lobortis ac condimentum vitae, congue ac felis. Integer fringilla massa sit amet euismod pretium. Nulla et augue mauris. Donec eget luctus velit, quis ultrices mauris. Sed magna felis, eleifend vitae ornare accumsan, suscipit sed eros. Vivamus condimentum mauris nec tortor fermentum rutrum. Vestibulum eget ipsum mi. Sed rhoncus porta ligula, in euismod odio fringilla eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et fermentum ante. Phasellus scelerisque, eros et aliquet sollicitudin, magna metus suscipit libero, in bibendum ligula ante fringilla orci. Nullam pellentesque lobortis mauris, in aliquam risus venenatis ut. Quisque ac quam ut sem interdum pretium. Donec quis lobortis sapien, non volutpat ante. Donec nibh felis, lobortis ac condimentum vitae, congue ac felis. Integer fringilla massa sit amet euismod pretium. Nulla et augue mauris. Donec eget luctus velit, quis ultrices mauris. Sed magna felis, eleifend vitae ornare accumsan, suscipit sed eros. Vivamus condimentum mauris nec tortor fermentum rutrum. Vestibulum eget ipsum mi. Sed rhoncus porta ligula, in euismod odio fringilla eu.";

let countWords = 0;
let countEt = 0;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    countWords++;
  }
  if (longText[i] + longText[i + 1] === "et" && longText[i - 1] === " ") {
    countEt++;
  }
}
console.log(countWords);
console.log(countEt);

//Bonus 2

const phraseToCheck = "racecar";
let reverseStr = "";
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  reverseStr += phraseToCheck[i];
}
if (phraseToCheck === reverseStr) {
  console.log(`${phraseToCheck} is a palindrome`);
} else {
  console.log(`${phraseToCheck} is not a palindrome`);
}
