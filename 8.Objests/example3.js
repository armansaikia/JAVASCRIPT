//assigning the string literal to the object literal
let firstName = "sai"
let lastName = "kiran"

let l1 = {
    fName : firstName,
    lName : lastName
}
console.log(l1) //{ fName: 'sai', lName: 'kiran' }

//in operator
console.log("address" in l1) //false
console.log("fName" in l1) //true

//Iterate the properties using for in loop 
for(let i in l1){
    console.log(i, " ", l1[i])
}
// fName   sai
// lName   kiran