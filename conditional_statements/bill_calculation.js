// Write a program in C to calculate and print the electricity bill of a given customer. The customer ID, name, and unit consumed by the user should be captured from the keyboard to display the total amount to be paid to the customer.

// The charge are as follow :

// Unit	Charge/unit
// upto 199	@1.20
// 200 and above but less than 400	@1.50
// 400 and above but less than 600	@1.80
// 600 and above	@2.00
// If bill exceeds Rs. 400 then a surcharge of 15% will be charged and the minimum bill should be of Rs. 100/-

let id=Number(prompt("enter customer id"))
let names=prompt("enter customer name")
let unit=parseFloat(prompt("enter your unit"))
// alert(`customer id: ${id} customer name: ${names}`)
let charge;

if(unit<200){
    charge=1.20
}else if(unit>=200 && unit<400){
   charge=1.50
}else if(unit>=400 && unit<600){
    charge=1.80
}else{
    charge=2.0
}

gross_bill=unit*charge;
if(gross_bill>400){
    surcharge=gross_bill*15/100
}
else{
    surcharge=0;

}
let final_bill=gross_bill+surcharge
if(final_bill<100){
    final_bill=100
}

console.log(final_bill)







