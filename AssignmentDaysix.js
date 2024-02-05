// Check if type of '70' is equal to 70
console.log(typeof("70"));
console.log(typeof(70));
// Check if parseInt('8.8') is equal to 9
console.log(parseInt('8.8') === 9);
// Boolean value is either true or false.
// Write five JavaScript statement which provide falsy value.
const isEmployee=false;
const index=0;
const string='';
const variable= undefined;
const infinity=NaN;
// Write five JavaScript statement which provide truthy  value.
const isIntern=true;
const count=1;
const truthyString='abc';
const array=[1,2,3];
const number=27;
// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// 5 > 4 true
console.log(5 > 4);
// 4 >= 3 true
console.log(4 >= 3);
// 4 < 3 false
console.log(4 < 3);
// 4 <= 3 false
console.log(4 <= 3);
// 5 == 5 true
console.log(5 == 5);
// 9 === 9 true
console.log(9 === 9);
// 9 == '9' true
console.log(9=='9');
// 8 === '8' false
console.log(8 === '8');
// 4 != 4 false
console.log(4 != 4);
// 4 !== 4 false
console.log(4 !== 4);
// 4 != '4' false
console.log(4 != '4')
// 4 != '4' false
console.log(4 != '4')
// 4 !== '4' true
console.log(4 !== '4')
// Find the length of python and jargon and make a falsy comparison statement.
console.log('python'.length !='jargon'.length);
// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
// 4 > 3 && 10 < 12 true
console.log(4 > 3 && 10 < 12);
// 4 > 3 && 10 > 12 false
console.log(4 > 3 && 10 > 12);
// 4 > 3 || 10 < 12 true
console.log(4 > 3 || 10 < 12);
// 4 > 3 || 10 > 12 true
console.log(4 > 3 || 10 > 12);
// !(4 > 3) false
console.log(!(4 > 3));
// !(4 < 3) true
console.log(!(4 < 3));
// !(false) true
console.log(!(false));

// !(4 > 3 && 10 < 12) false
console.log(!(4 > 3 && 10 < 12));
// !(4 > 3 && 10 > 12) true
console.log(!(4 > 3 && 10 > 12));
// !(4 === '4') true
console.log(!(4 === '4'));
// There is no 'on' in both dragon and python
console.log(!('python'.includes('on') && 'dragon'.includes('on')));