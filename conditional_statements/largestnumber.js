// Largest of Three Numbers using nested if

let no1 = Number(prompt("Enter your 1st number"));
let no2 = Number(prompt("Enter your 2nd number"));
let no3 = Number(prompt("Enter your 3rd number"));

if (no1 > no2 && no1 > no3) {
    console.log("Number 1 is largest:", no1);
}
else if (no2 > no1 && no2 > no3) {
    console.log("Number 2 is largest:", no2);
}
else if (no3 > no1 && no3 > no2) {
    console.log("Number 3 is largest:", no3);
}
else {
    console.log("All numbers are equal or two are same.");
}
