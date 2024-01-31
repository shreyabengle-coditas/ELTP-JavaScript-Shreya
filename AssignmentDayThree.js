//declare variables and assign string, boolean, undefined and null data types
const name="Shreya";
const isEmployeed= true;
const location= undefined;
const empId=null;

//typeof operator to check different data types. Check the data type of each variable

const age=21;
const colors=['red','blue','green'];
const school_details={
    name:"Ursula" ,
    loaction:"Pune"
}

function display(){
    console.log("I display things");
}

console.log(`Datatype of name is "${typeof(name)}"`);
console.log(`Datatype of isEmloyeed is "${typeof(isEmployeed)}"`);
console.log(`Datatype of location is "${typeof(location)}"`);
console.log(`Datatype of emId is "${typeof(empId)}"`);
console.log(`Datatype of age is "${typeof(age)}"`);
console.log(`Datatype of colors is "${typeof(colors)}"`);
console.log(`Datatype of school_details is "${typeof(school_details)}"`);
console.log(`Datatype of display is "${typeof(display)}"`);
