"use strict";
/*Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase.*/
Object.defineProperty(exports, "__esModule", { value: true });
//This program stores a person name in a variable and then converts the name to upper,lower and title case respectively
var personName = "mAiSuM hAyAtI";
console.log(personName.toUpperCase());
console.log(personName.toLowerCase());
console.log(personName
    .split(" ")
    .map(function (element) {
    return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
})
    .join(" "));
