//creating object in javascript using block
let l1 = {

}
console.log(l1) //{}
console.log(typeof(l1)) //object

//object literals in object
let l2 = {
    firstName : "Sai",
    lastName : "Kiran"
}
console.log(l2) //{ firstName: 'Sai', lastName: 'Kiran' }
console.log(typeof(l2)) //object
console.log(typeof(l2.firstName)) //string
console.log(typeof(l2.lastName)) //string

//this keyword will refer to the  current object
//accesing object literals separtely using this keyword
let l3 = {
    firstName : "Sai", 
    lastName : "Kiran",
    f1 : function(){
        console.log(this) //{ firstName: 'Sai', lastName: 'Kiran', f1: [Function: f1] }
        console.log(this.firstName, this.lastName, this.f1) //Sai Kiran [Function: f1]
        console.log(typeof(this.firstName), typeof(this.lastName), typeof(this.f1)) //string string function
    }
}
l3.f1()