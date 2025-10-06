 // get salary of employee
    let salary=Number(prompt("enter your salary"));

    let dic=(salary/10);
    console.log(dic);

    let bonus=(salary+dic);
    console.log(bonus);
    alert(`your bonus is ${dic} and your total salary ${bonus}`)