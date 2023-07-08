//private memebers
class Counter{

    constructor(){

        let count = 0  //type of private member
        console.log(count)

        this.increment = function(){
            count++
            console.log(count)
        }
    }
    
}
c = new Counter()
c.increment()
c.increment()
c.increment()

//console.log(count) //ReferenceError: count is not defined