const numbers=[1,222,3,4];
const newReduce=(numbers,sum, sumFunction)=>{
    for(const number of numbers){
        sum=sumFunction(sum,number);
    }
    return sum;
}

const sum=newReduce(numbers,0,(accumulator,currValue)=>{ return accumulator += currValue})
console.log(sum);