class Parent{

    a = 10
    b = 20

    constructor(){
        console.log(this.a, this.b);
    }
}

class Child extends Parent{

    c = 30
    d = 40
    constructor(){
        super()
        console.log(this.c, this.d);
    }
}
new  Child()