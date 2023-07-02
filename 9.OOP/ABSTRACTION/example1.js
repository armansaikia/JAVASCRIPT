//Abstraction
class Parent{

    fName = undefined
    lName = undefined

    constructor(firstName, lastName){
        if(this.constructor == Parent){
            throw new Error("Abstract Classes cant be instantiated")
        }
        this.fName = firstName;
        this.lName = lastName;
    }

    getDetails(){
        console.log("Parent: ", this.fName, this.lName); 
    }
}

class Child extends Parent{

    constructor(firstName, lastName){
        super(firstName, lastName)
    }

    getDetails(){
        console.log("Child: ", this.fName, this.lName);  //Child:  Sai Kiran
    }
}

let c = new Child("Sai", "Kiran")
c.getDetails()