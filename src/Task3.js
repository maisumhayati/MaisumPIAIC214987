/*Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase.*/
var personName = "mAiSuM hAyAtI";
console.log(personName.toUpperCase());
console.log(personName.toLowerCase());
console.log(personName
    .split(" ")
    .map(function (element) {
    return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
})
    .join(" "));
