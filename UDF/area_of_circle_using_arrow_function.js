const pi = 3.14;
const r = Number(prompt('Enter Radius for find circle'));

const circle = (r) =>{
       circle_area = pi*r*r;
       console.log(`Area of circle is ${circle_area}`); 
}

circle(r);