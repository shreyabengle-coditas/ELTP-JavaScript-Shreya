// If user is 18 or older , give feedback: 'You are allowed to Marry' 
// but if not 18 console feedback stating to wait for the number of years he needs to turn 18.
const age=2;
(age>=18)?(console.log("You are allowed to Marry")):(console.log(`wait for ${18-age} years to marry`));

//Compare the values of myAge and yourAge. 
//Based on the comparison and log the result to console stating who is older.
const myAge=21;
const yourAge=10;
const ageGap=Math.abs(myAge-yourAge);
(myAge>yourAge)?(console.log(`you are ${ageGap} years younger than me`)):(console.log(`you are ${ageGap} years older than me` ));


//If myAge is greater than yourAge return 'yourAge is greater than myAge ' else 'myAge is less than yourAge'. Try to implement it in to ways.
if(myAge>yourAge){
    console.log("My age is greater than my age");
}
else console.log("my age is less than your age");


// Check, if a number is even or not.
const number=10;
if(number%2===0){
    console.log(`${number} is an even number`);
}
else console.log(`${number} is a odd number`);

//Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
const score=90;
if(score>=80 && score<100){
    console.log('A');
}
else if(score>=70 &&score <79)
{
    console.log('B');
}
else if(score>=60 &&score <69)
{
    console.log('C');
}
else if(score>=50 &&score <59)
{
    console.log('D');
}
else console.log('F');


// Check if the season is Rainy, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Rainy.
// December, January or February, the season is Winter.
// March, the season is Spring
//  April, May, June, July or August, the season is Summer

const month="April";
if(month==="September" || month==="October" || month==="November"){
    console.log("The season is rainy");
}
else if(month==="December" || month==="January" || month==="February"){
    console.log("The season is Winter");
}
else if(month==="March"){
    console.log("the season is Spring");
}
else console.log("the season is Summer");

//Check if a day is weekend day or a working day. Your script will take day as an input.
const day='Monday';
switch(day.toLowerCase()){
    case "monday" :
        console.log("Working Day")
        break;
    
    case "tuesday":
        console.log("Working Day")
        break;
    
    case "wednesday":
        console.log("Working Day")
        break;
    
    case "thrusday":
        console.log("Working Day")
        break;
    
    case "friday":
        console.log("Week Day");
        break;
    case "saturday":
        console.log("Weekend");
        break;
    case "sunday":
        console.log("Weekend");
        break;

    default:
        console.log("Invaid");
}

//Write a program which tells the number of days in a month.
const months='February'
const monthName=months.toLowerCase();
const year=1800;
let isLeap;
if(monthName==='January' || monthName==="March" || monthName==='may'|| monthName==='July' || monthName==='August'|| monthName==='October' || monthName==='December'){
    console.log(`31 days in ${monthName}`);
}
else if(monthName !="February"){
    console.log(`30 days in ${monthName}`);
}
else {
    isLeapYear();
    if (isLeap===1){
        console.log(`29 days in ${monthName}`);
    }
    else console.log(`28 days in ${monthName}`);
    

}

// Write a program to check whether the year is leap year or not.

function isLeapYear(){
    (year%400===0)? ((year%4===0 && year!=100)  ? (isLeap=1):(isLeap=0)):(isLeap=0);
    return isLeap;
}
if (isLeap===1){
    console.log(`${year} is a leap year`);
}
else console.log(`${year} is not a leap year`);

isLeapYear();


// 10. Write a JavaScript ternary expression that checks the following conditions:
// If the first condition (condition1) is true, it should check the second condition (condition2). If condition2 is true, set the result to 'A', otherwise set it to 'B'.
// If the first condition (condition1) is false, it should check another condition (condition3). If condition3 is true, set the result to 'C', otherwise set it to 'D'.
const condition1=true 
const condition2=false;
const condition3=true;
let result=(condition1)?(condition2?'A':'B'):(condition3?'C':'D');
console.log(result);


let result1 = true ? false ? true ? 'A' : 'B' : false ? 'C' : 'D' : 'E';
console.log(result1);//D