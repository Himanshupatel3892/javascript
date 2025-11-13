const l = Number(prompt('Enter length for find rectangle'));

const w = Number(prompt('Enter width for find rectangle'));

const rectangle = (l,w) =>{
    r = l * w;
    console.log(`Area of Rectangle is ${r}`);
}

rectangle(l,w);
