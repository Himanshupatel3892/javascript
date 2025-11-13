const number = Number(prompt('Enter Number'));

function fibonacci(number){
    if(number <= 1){
       return 1;
    }
    else{
        return fibonacci(number-1) + fibonacci(number - 2);
    }
}

for(let i = 0; i <= number;i++){
    console.log(fibonacci(i));
}