/*Name Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, uppercase, and titlecase.*/

let personName: String = "mAiSuM hAyAtI";

console.log(personName.toUpperCase());
console.log(personName.toLowerCase());
console.log(
  personName
    .split(" ")
    .map(
      (element) =>
        element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()
    )
    .join(" ")
);

export {};
