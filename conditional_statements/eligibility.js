// Admission Eligibility Check
// Eligibility Criteria : Marks in Maths >=65 and Marks in Phy >=55 and Marks in Chem>=50 and Total in all three subject >=190 or Total in Maths and Physics >=140 
let maths = Number(prompt("enter your maths mark"))
let physics = Number(prompt("enter your physics mark"))
let chemistry = Number(prompt("enter your chemistry mark"))
if (maths + physics + chemistry >= 190 && maths + physics >= 140) {
    console.log("you are eligibil");
}
else {
    console.log("you are  not eligibil");

}