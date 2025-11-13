const num = Number(prompt('Enter Number'));

function prime(num){
     if(num%2 === 0){
        console.log(`${num} is Not Prime Number`);
     }
     else{
        console.log(`${num} is Prime NUmber`);
     }
}

prime(num)