//private variable
class User{
    
    constructor(){

        let count = 0 //private variable
        console.log(count)

        this.increment = function(){
            count++
            console.log(count)
        }

    }

   
}
let u = new User()
u.increment()
u.increment()