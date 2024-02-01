//Declare '10' string
const number='10';
//returns type string
console.log(typeof(number));
//to return number we use Number()
console.log(Number(number));


const float='9.8';
//returns type string
console.log(typeof(float));
//ParseFloat converts string to type float number and ceil is added to round up value and get 10
console.log(Math.ceil(parseFloat(float)));


//generate number between 0 and 100
function generateNumber(){
    const number=Math.floor(Math.random()*101);
    console.log(number);
}
generateNumber();

//generate number between 50 and 100
const randomNumber= Math.floor(Math.random()*51+50);


//to print the pattern
for(let index=1;index<=5;index++){
    console.log(index +"\t" +index**0 +"\t"+ index**1+"\t"+index**2);
}
//area of triangle
const base = 10;
const height=12;
console.log(`Area of triangle: ${base*height}`);

