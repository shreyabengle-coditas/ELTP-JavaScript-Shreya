// Declare an empty array;
const array=[];
// Declare an array with more than 5 number of elements
const rollNumbers=[1,2,3,4,5,6,7];
// Find the length of your array
console.log(rollNumbers.length);
// Get the first item, the middle item and the last item of the array
console.log(Math.round((rollNumbers.length-1)/2));
console.log(rollNumbers[0],rollNumbers[Math.round((rollNumbers.length-1)/2)],rollNumbers[rollNumbers.length-1]);
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes=[1,'shreya',[],7,[[]],'array'];
console.log(mixedDataTypes.length);
// Declare an array variable name itCompanies and assign initial values Coditas, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies=['Coditas','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
// Print the array using console.log()
console.log(itCompanies);
// Print the number of companies in the array
console.log(`The number of companies are ${itCompanies.length}`);
// Print the first company, middle and last company
console.log(`First Company: ${itCompanies[0]} \t Second company: ${itCompanies[Math.round((itCompanies.length-1)/2)]} \t Third company: ${itCompanies[itCompanies.length-1]}`)
// Print out each company
for(let index=0;index<itCompanies.length;index++){
    console.log(itCompanies[index]);
}
// Change each company name to uppercase one by one and print them out
console.log((itCompanies.toString()).toUpperCase());
// Print the array like as a sentence: Coditas, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies.toString()} are big IT comapnies`);
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const companyName='HP';
if(itCompanies.includes(companyName)){
    console.log(companyName);
}else console.log("company not found");

// Filter out companies which have more than one 'o' without the filter method
const filteredArray=[];
for(let index=0;index<itCompanies.length;index++){
    if(itCompanies[index].includes('oo')){
        filteredArray.push(itCompanies[index]);
    }
}
console.log(filteredArray);


// Sort the array using sort() method
console.log(itCompanies.sort());

// Sort the array by country name length without sort;
const countries=['India','USA','UK'];
const sortedCountries=countries.sort((a,b)=> a.length-b.length);
console.log(sortedCountries);

// Reverse the array using reverse() method
console.log(itCompanies.reverse());
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3));
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(4,8));
// Slice out the middle IT company or companies from the array
//itCompanies[Math.round((itCompanies.length-1)/2)]
console.log(itCompanies.slice(Math.round((itCompanies.length-1)/2),Math.round((itCompanies.length-1)/2)+1));
// Remove the first IT company from the array
console.log(itCompanies.shift());
console.log(itCompanies);

// Remove the middle IT company or companies from the array
if(!(itCompanies.length%2)){
    const middelIndex=(Math.floor(itCompanies.length/2)-1);
    itCompanies.splice(middelIndex,2);
    console.log(itCompanies);
}
else {
    const middelIndex=(Math.floor(itCompanies.length/2));
    itCompanies.splice(middelIndex,1);
    console.log(itCompanies);

}
// Remove the last IT company from the array
const newArray=itCompanies.pop();
console.log(itCompanies);

// Remove all IT companies
while(itCompanies.length>0){
    itCompanies.pop();
}
console.log(itCompanies);
// 24. First remove all the punctuations and change the string to array and count the number of words in the array, dont use regex
// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, Node, Python, dJango'
const string = 'I love teaching and empowering people. I teach HTML, CSS, JS, Node, Python, dJango';
const text=string.replaceAll(",","");
console.log(text);
console.log(text.split(" "));
console.log((text.split(" ")).length);

// 25. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Rasmalai' in the beginning of your shopping cart if it has not been already added
console.log(shoppingCart.unshift("Rasmalai"));
console.log(shoppingCart);
// add Gulabjamun at the end of you shopping cart if it has not been already added
shoppingCart.push('Gulabjamun');
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey
const indexOfHoney=shoppingCart.indexOf('Honey');
shoppingCart.splice(indexOfHoney,1);
console.log(shoppingCart);

// modify Tea to 'Green Tea'
const indexOfTea=shoppingCart.indexOf('Tea');
shoppingCart[indexOfTea]='Green Tea';
console.log(shoppingCart);
// 26. In countries array check if 'India' exists in the array if it exists print 'INDIA'. If it does not exist add to the countries list.
console.log(countries.includes('India'));
// 27. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webTechs=['Pass','Iass'];
if(webTechs.includes['Saas']){
    console.log('Sass is a CSS preprocess');
} else{
    webTechs.push('Saas');
}
console.log(webTechs);
// 28. Concatenate the following two variables and store it in a fullStack variable.
 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack=frontEnd+backEnd
 console.log(fullStack);


// 29. The following is an array of 10 students ages:
 const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const sortedAges= ages.sort();
console.log(sortedAges);
// Sort the array and find the min and max age
console.log(sortedAges[0]);
console.log(sortedAges[ages.length-1]);

// Find the median age(one middle item or two middle items divided by two)
//console.log(sortedAges[Math.floor(sortedAges.length/2)-1]);
const median=(sortedAges.length%2)?((sortedAges[Math.floor(sortedAges.length/2)-1]+sortedAges[Math.floor(sortedAges.length/2)])/2):(sortedAges[Math.floor(sortedAges.length/2)]);
console.log(median);
// Find the average age(all items divided by number of items)
let sum=0;
for(let index=0;index<ages.length;index++){
    sum += ages[index];
}
const avg = sum/ages.length;
console.log(avg);

// Find the range of the ages(max minus min)
const minElement=sortedAges[0];
console.log(minElement);
const maxElement=sortedAges[sortedAges.length-1];
console.log(maxElement);
const range=maxElement-minElement;
console.log(range);


// Compare the value of (min - average) and (max - average), use abs() method
console.log(Math.abs(minElement-avg));
console.log(Math.abs(maxElement-avg));

// 30. Find the middle countries in the countries array.
if(countries.length%2)
    console.log(countries[Math.floor(countries.length/2)])
else
    console.log(countries[(countries.length)/2], countries[(countries.length-1)/2])

// 31. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half
// ARRAYS:
// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'India',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
const country = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'India',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
  
  let firstHalf;
  let secondHalf;
  
  if (!country.length % 2) {
    firstHalf = country.slice(0, country.length / 2);
    secondHalf = country.slice(country.length / 2);
  } else {
    firstHalf = country.slice(0, Math.ceil(country.length / 2));
    secondHalf = country.slice(Math.ceil(country.length / 2));
  }
  
  console.log(`First half of countries: ${firstHalf}`);
  console.log(`Second half of countries: ${secondHalf}`);