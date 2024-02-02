//Declare a variable and assign a value 'Easy JavaScript Assignments'.
const string="Easy JavaScript Assignments";
const stringLength=string.length;

// Print the length of the string.
console.log(stringLength);

//Change all the string characters to capital letters using toUpperCase() method
console.log(string.toUpperCase());

//Change all the string characters to lowercase letters using toLowerCase() method
console.log(string.toLowerCase());

// Slice out the first word of the string using substr() and substring() method
console.log(string.substr(0,1));
console.log(string.substring(0,1));

//Slice out the phrase JavaScript Assignments from 'Easy JavaScript Assignments'.
console.log(string.slice(5,27));

// Check if the string contains a word Script using includes() method
console.log(string.includes("Script"));
// Split the string into an array using split() method
console.log(string.split());

// Split the string 'Easy JavaScript Assignments' at the space using split() method
console.log(string.split(/[, ]+/));


// 'ELTP, BATCH, THREE' split the string at the comma and change it to an array.
const intern= 'ELTP, BATCH, THREE' ;
console.log(intern.split(/[,]+/));


// Change 'Easy JavaScript Assignments' to 'Easy Python Assignments' using replace() method.
console.log(string.replace("JavaScript Assignments","Python Assignments"));


// What is character at index 20 in 'Easy JavaScript Assignments' string? Use charAt() method.
console.log(string.charAt(20));


// What is the character code of J in 'Easy JavaScript Assignments' string using charCodeAt()
console.log(string.charCodeAt(5));


// Use indexOf to determine the position of the first occurrence of 'a' in 'Easy JavaScript Assignments'
console.log(string.indexOf('a'));

// Use lastIndexOf to determine the position of the last occurrence of 'a' in 'Easy JavaScript Assignments'.
console.log(string.lastIndexOf('a'));

// Use indexOf to find the position of the first occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'
const string3='Easy JavaScript Assignments, Easy Easy';
console.log(string.indexOf('Easy'));


// Use lastIndexOf to find the position of the last occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'
console.log(string3.lastIndexOf('Easy'));
// Use search to find the position of the first occurrence of the word 'Easy' in the following sentence: 'Easy JavaScript Assignments, Easy Easy'
console.log(string3.search('Easy'));


// Use trim() to remove any trailing whitespace at the beginning and the end of a string. '       Easy JavaScript Assignments, Easy Easy             '
const sentence='       Easy JavaScript Assignments, Easy Easy';
console.log(sentence.trim());
// Use startsWith() method with the string 'Easy JavaScript Assignments' and make the result true
console.log(string.startsWith('Easy'));

// Use endsWith() method with the string 'Easy JavaScript Assignments' and make the result true
console.log(string.endsWith('Easy JavaScript Assignments'));


// Use match() method to find all the a’s in 'Easy JavaScript Assignments'
console.log(string.match(/a/gi));
// Use concat() and merge 'Easy' and 'JavaScript' to a single string.
const concatString='Easy'.concat(" ",'Javascript')
console.log(concatString);

// Use repeat() method to print 'Easy JavaScript' 3 times.
console.log(concatString.repeat(3));

// 'Javascript is Easy, too Easy, too Easy, Easy to learn' Count the number of word 'Easy' in this sentence.
let sentence1='Javascript is Easy, too Easy, too Easy, Easy to learn';
sentence1 = sentence1.replaceAll(',','');
const array = sentence1.split(" ");

const arrayLength=array.length;


let count=0;
for(let index=0;index<arrayLength;index++){
    if(array[index]==='Easy'){
        count+=1;
    }
}
console.log(count);


// Use match() to count the number of all 'Easy' in the following sentence:'Javascript is Easy, too Easy, too Easy, Easy to learn'

console.log(sentence1.match(/Easy/g).length);

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).    
    const uncleanSentence = '%I $am@% a %softwa@r%e %e@ngineer, &and& %java@sc@ript% is Ea%s#y';
    console.log(uncleanSentence.replace(/[^\w\s]/gi,""));



// 28. Calculate the total annual income of the person by extracting the numbers from the following text. 'I earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing, and 50000 euro from trading'
const text='I earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing, and 50000 euro from trading'
const arrayOfAmount = text.match(/\d+(\.\d+)?/g);
const incomeAmount = arrayOfAmount.map(Number);
const totalAmount= incomeAmount[0]*12+incomeAmount[1]+incomeAmount[2]+incomeAmount[3];
console.log(`The total amount is ${totalAmount}`);