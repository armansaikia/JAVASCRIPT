class Product extends Object{
    
    a = 10
    b = 20
    c = 30

    constructor(){
        super()
        console.log(this.a, this.b, this.c) //10 20 30
    }

}
new Product()