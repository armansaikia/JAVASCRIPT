//Encapsulation
class Profile{

    //setter and getters
    getFirstName(){
        return this.firstName
    }
    setFirstName(firstName){
        return this.firstName = firstName
    }

    getLastName(){
        return this.lastName
    }
    setLastName(lastName){
        return this.lastName = lastName
    }

}

let p = new Profile()
p.setFirstName('Sai')
p.setLastName("Kiran")
console.log(p.getFirstName(), p.getLastName())