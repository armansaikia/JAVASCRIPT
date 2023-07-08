class Customer{

    username
    email
    contact
    #pancard //private member

    constructor(username, email, contact, pancard){

        this.username = username
        this.email = email
        this.contact = contact
        this.#pancard = pancard
        console.log(this.#getPancard()) //BUNI7865
       
    }

    #getPancard = function(){
        return this.#pancard
    }
}

var c = new Customer("Sai Kiran", "sai.kiran@gmail.com", 9876543210, "BUNI7865")
console.log(c.username)
console.log(c.email)    
console.log(c.contact)
//console.log(c.#pancard) //SyntaxError: Private field '#pancard' must be declared in an enclosing class