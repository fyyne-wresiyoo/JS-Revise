
// adding function sum(a, b) {
function sum (a,b){
    
    console.log (a+b)
}

sum (3,2)


const sub = function (c,d){
    return c-d;


}
console.log(sub(10,5))


// f
function subtrack(x,y)
{
    return x-y;

}

console.log(subtrack(10,5))



//  arrow functions 

const arrow =  (p,q)=>{
    console.log("this is an arrow function")
    return p+ q



}
let answer = arrow(10,10)
console.log(answer)

const arrow2 = (M,N) => N+M  // if there is only one operation then the return can be written in a single line next to the arrow function , iit doent work while there are multiple operations in the body

console.log(arrow2(10,20))  
