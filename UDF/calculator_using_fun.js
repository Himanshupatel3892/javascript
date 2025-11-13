 
 function get_value(){

 let a=Number(prompt("Enter first Number: "));
 let b=Number(prompt("Enter second Number: "));
 return[a,b];

 }

 function sum(a,b) {
     return a + b;

}

function subtract(a,b) {
    return a - b;
    
}

function multiply(a,b) {
    return a * b;
    
}

function divide(a,b) {
    return a / b;
    
}

  let choice = Number(prompt("enter 1 for sum; 2 for substraction; 3 for multiplication; 4 for division: "));
  let [a,b] = get_value();

  let result;

switch(choice){
    case 1:
       result = sum(a,b);
        break;
	case 2: 
		result = subtract(a,b);
		break;
		
	case 3: 
		result = multiply(a,b);
		break;
		
	case 4: 
		result = divide(a,b);
		break;
     
    default:
        result ="Invalid choice";    
}




alert(`Result: ${result}`);

