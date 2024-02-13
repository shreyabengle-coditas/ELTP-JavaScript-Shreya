// Create an empty object called cow
const cow ={

}
// Print the the cow object on the console
console.log(cow);
// Add name, legs, color, age and sound properties for the cow object. The sound property is a method which return "maaah maaah"
cow.name='jersey';
Object.assign(cow,{legs:4,color:'white',age:10});
cow.sound = ()=>{
    const sounds='maah maah';
    return sounds;
}
console.log(cow);
// Get name, legs, color, age and sound value from the cow object
console.log(cow.name,cow.legs,cow.color,cow.age);
const cowSound=cow.sound();
console.log(cowSound);
// Set new properties the cow object: breed, getCowInfo()
cow.breed='Belgian Blue';
cow.getCowInfo = () =>{
    console.log("info");
}

// Find the person who has many skills in the users object.
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
 
  let maxskills=0;
  let username='';

  for(const user in users){
    const {skills}=users[user];
    if(skills.length>maxskills){
        maxskills=skills.length;
        username=user;
    }
  }
  console.log(username);

// Count logged in users, count users having greater than equal to 30 points from the following object.
let loggedInCount=0;
for(const user in users){
    const{isLoggedIn}=users[user];
    if(isLoggedIn){
        loggedInCount+=1;
    }
}
console.log(loggedInCount);



// // Find people who are MERN stack developer from the users object
let mernDevelopers=[];
for(let user in users){
    const {skills} =users[user];
    if (skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node')){
        mernDevelopers.push(user);
    }
}
console.log(mernDevelopers);

// // Set your name in the users object without modifying the original users object
const Shreya ={
    email:'shreya@gmail.com'
};
users.Shreya=Shreya; //Object.assign(users,Shreya);
console.log(users);

// // Get all keys or properties of users object
for(const user in users){
    console.log(user);
    for(const key in users[user]){
        console.log(key);
    }
}

// // Get all the values of users object
const values=Object.values(users);
console.log(values);

// // Use the countries object to print a country name, capital, populations and languages.
const countries={
    name:"India",
    capital:"Delhi",
    populations:100000,
    language:"Hindi"
}
console.log(countries);
// // Create an object called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount={
    firstName:"Shreya",
    lastName:"Bengle",
    income:10000,
    expenses:5000,
    totalIncome(){

    },
    accountInfo(){

    },
    addIncome(){

    }, 
    addExpense(){

    },
    accountBalance(){

    }

}
console.log(personAccount);
// Imagine you are getting the below users array of objects.
const users1 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    // Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
function signUp(name){
    let count=0;
    for(const user in users1){
        const{username}= users1[user];
        console.log(username);
        if(username===name){
            console.log(`already has an account`);
            count+=1;
            break;
        }
    }
    if(count===0){
        users1.push(name);
    }
}
signUp('Thomas');
console.log(users1);



// The products array has three elements and each of them has six properties.
    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]


// Create a function called rateProduct which rates the product
function rateProduct(productName,rate){
    for(const product of products){
        const {name}= product;
        if(name === productName){
            const {ratings} = product;
             ratings.push(rate);
            
        }
        
        
    }
}
rateProduct('Laptop',5);
console.log(products);


// Create a function called averageRating which calculate the average rating of a product
function averageRating(productName){
    let totalAverage=0;
    for(const product of products){
        const {name} = product;
        if(name === productName){
          const {ratings} = product;
          for(const {rate} of ratings){
            totalAverage += rate/ratings.length;
          }
          console.log(totalAverage);
          return 0;
        }
      }
    
}
averageRating('mobile phone')

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(productName,like){
    for(const product of products){
        const{name}=product;
        if(name===productName){
            const {likes}=product;
            console.log(likes.length);
            if(likes.length>0){
                likes.pop();
            }
            else{
                likes.push(like);
            }
        }
    }
}
likeProduct('TV','aseded');
console.log(products);