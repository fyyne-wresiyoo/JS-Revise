// objects in js 


// methods to ceate objects
// 1. object literal
// 2. constructor function
// 3. Object.create()

// object literal

let seaway = { // this curly bracket is object literal 
    name: ["Panama", "panamaTwice ", " idk  i just love panama" , "panama always untill i found the real truth"],
    length: 100,   // object ko property
    "user date" : 25

}
// console.log(seaway);
console.log("Seaway Name:", seaway.name[2]);  // using dot notation 
console.log("Seaway Length:", seaway.length + " km");

// bracket notation []
console.log(seaway["name"][3]);
console.log(seaway["length"] + " km");
// there are some cases in which we dont use dot ,
// like when the property name has some space
console.log(seaway["user date"]);




let key = 'name '


console.log(seaway[key]);  // using bracket notation with variable


// MODIFY OBJECT PROPERTIES
seaway.length = 150;  // using dot notation
console.log("Updated Seaway Length:", seaway.length + " km");

seaway["user date"] = 30; // using bracket notation
console.log("Updated User Date:", seaway["user date"]); 

// ADD NEW PROPERTIES
seaway.location = "Global"; // using dot notation
seaway["status"] = "Active"; // using bracket notation

console.log("Seaway Location:", seaway.location);
console.log("Seaway Status:", seaway["status"]);    


//“Primitive values are passed by value. Objects (including arrays and functions) are passed by value of reference. Truthy and falsy depend on the value, not the data type.

// nested objects
    let university = {
        name: "Global Tech",
        address: {
            street: "123 Tech Lane",
            city: "Innovate City",
            country: "Techland"
        },
        courses: ["Computer Science", "Engineering", "Mathematics"]
    };


    console.log("University address:", university.address.street);
  console.log("University Courses ", university['address']['city'] )

//optional chainin

if(university.payment.address){
    if (university.payment.address.street){
        console.log("University payment street:", university.payment.address.street);  // it wont show undefined error althought the payment is not defined , because it will check the next item eg address too and it will show error 
    }
}


//solution 


console.log("University payment street:", university.payment?.address?.street); // this is used to overcome if hell and it will show undefined if any of the property is not defined















// constructor function
// function Car(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
// }

// let myCar = new Car("Toyota", "Corolla", 2020);
// console.log("Car Brand:", myCar.brand);
// console.log("Car Model:", myCar.model);
// console.log("Car Year:", myCar.year);  // i have no idea what tf i have written above
