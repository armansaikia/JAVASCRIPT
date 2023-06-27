class Parent {

    constructor(firstName, lastName){
        console.log(firstName + " " + lastName)
    }
}

class Child extends Parent {

    constructor(age, contact){
        super("sai", "Kiran")
        console.log(age + " " + contact)
    }
}

new Child(24, 9876543210)