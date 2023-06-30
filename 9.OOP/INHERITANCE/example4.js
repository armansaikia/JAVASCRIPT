//constructor using arguments using this keyword and prototype method using this keyword
class Parent{

    //constructor using arguments (object)
    constructor(firstName, lastName){

        this.fName = firstName
        this.lName = lastName
    }

    //prototype method (instance/object)
    getDetails(){
        console.log(this.fName, this.lName) //Sai Kiran
    }

    //static method (className)
    static getProductDetails(productName, productCost){
        console.log(productName, productCost)
    }
}

let p = new Parent("Sai", "Kiran") //Mi 20000
p.getDetails()
Parent.getProductDetails("Mi", 20000)