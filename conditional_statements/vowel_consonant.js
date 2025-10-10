// ->Vowel or Consonant Check

let ch = prompt("enter your ch")
if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
    console.log("It is a vowel");

} else if (ch >= 'a' && ch <= 'z') {
    console.log("it is a consonant");

} else {
    console.log("not a letter");

}