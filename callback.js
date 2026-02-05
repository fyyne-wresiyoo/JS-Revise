// hehehe its the callback funcrtionsss



// const parent = function(v){
//     console.log("this is parent ")
// console.log(v)
// v()

// }

// const child = function ()
// {
//     console.log("this is child")

// }

// parent ()
// parent(child)

const parent = function(v) {  // define parameter v
    console.log("this is parent");
    if (v) {                  // check if v exists
       const result = v(10);    
       console.log(result)              // call the function
    }
}

const child = function(v) {
    console.log("this is child");
    return v*v
}

parent();       // prints: this is parent
parent(child);  // prints: this is parent
                //          this is child


                // if one function is passed as argument ot another unction then its called callback function \\\\R||||


