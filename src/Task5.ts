/* Famous Quote 2: Repeat Exercise 4, 
but this time store the famous person’s name in a variable called famous_person. 
Then compose your message and store it in a new variable called message. Print your message. */

let famousPerson: String = "Harvey Specter";
let quote: String =
  "When you’re backed against the wall, break the goddamn thing down.";

let message = `${famousPerson} once said, ${quote}`;

console.log(message);

export {};
