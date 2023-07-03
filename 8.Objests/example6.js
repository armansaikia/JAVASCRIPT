//call apply bind 

let l1 = {
    firstName : "Sai",
    lastName : "Kiran",
    displayFunc: function(age, contact){
        console.log(this.firstName + " " + this.lastName)
        console.log(age, contact)
    }
}

l1.displayFunc(25, 9876543210)
// Sai Kiran
// 25 9876543210

//call() ------------> we can apply directly the valus
let update_l1 = {
    firstName : "Vamsi",
    lastName : "Krishna"
}
l1.displayFunc.call(update_l1, 26, 9876543210)





//apply -------> we will store the elements in array
let update_l2 = {
    firstName : "Sai",
    lastName : "Ram"
}
l1.displayFunc.apply(update_l2, [27, 9876543210])





//bind ------> we need a variable to call the function
let update_l3 = {
    firstName : "Anvesh",
    lastName : "Reddy"
}
let l = l1.displayFunc.bind(update_l3, 28, 9876543210)
l()