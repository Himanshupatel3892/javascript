let getdays=Number(prompt("enter your days"));
let year=parseInt(getdays/365);
let remain=parseInt(getdays%365);
let month=parseInt(remain/30);
remain=parseInt(remain%30);
alert(`${year} year: ${month} month: ${remain} remain:`);
