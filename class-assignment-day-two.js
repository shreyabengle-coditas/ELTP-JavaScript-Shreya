let name="john";
//let name="twinkle";//cannot reassign let in same scope
var surname="jan";
function fullName(){
    let name="shreya";//can be declared in other scope
    console.log(name,surname);
    var surname="Bengle";
    console.log(name,surname);
}
fullName();
//console.log(name)
console.log(`${name} ${surname}`);