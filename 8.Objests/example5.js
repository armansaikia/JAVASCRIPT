let l1 = {
    firstName : "Sai",
    lastName : "Kiran",
    displayFunc :function(){
        console.log(this.firstName + " " + this.lastName)
    }
}
l1.displayFunc()

let update_l1 = {
    firstName : "Vamsi",
    lastName : "Krishna",
}

//function borrowing
//objectRef.functionName.call(newobjectref)
l1.displayFunc.call(update_l1)  //Vamsi Krishna

let update_l2 = {
    firstName : "Sai",
    lastName : "Ram",
}
l1.displayFunc.call(update_l2) //Sai Ram