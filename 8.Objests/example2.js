//adding properties and function to an empty object
let l1 = {

}

//adding properties
l1.firstName = "Sai"
l1.lastName = "Kiran"
console.log(l1) //{ firstName: 'Sai', lastName: 'Kiran' }

//adding function
l1.f1 = function(){
    console.log('f1 function')
}
console.log(l1) //{ firstName: 'Sai', lastName: 'Kiran', f1: [Function (anonymous)] }

//accessing properties from an object using . and []
let l2 = {
    firstName : "Vamsi",
    lastName : "Krishna"
}
console.log(l2.firstName, l2.lastName) //Vamsi Krishna
console.log(l2['firstName'], l2['lastName']) //Vamsi Krishna