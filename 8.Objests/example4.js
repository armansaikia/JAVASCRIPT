//Nested Object
let user = {
    firstName : "Sai",
    lastName : "Kiran",
    userAddress : {
        address : "Hyd",
        pincode : 500038
    }
}
console.log(user)
console.log(typeof(user)) //object
console.log(typeof(user.userAddress)) //object

// {
//     firstName: 'Sai',
//     lastName: 'Kiran',
//     userAddress: { address: 'Hyd', pincode: 500038 }
// }

console.log(user.firstName) //Sai
console.log(user.lastName) //Kiran
console.log(user.userAddress) //{ address: 'Hyd', pincode: 500038 }
console.log(user.userAddress.address) //Hyd
console.log(user.userAddress.pincode) //500038