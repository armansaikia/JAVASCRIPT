function f1(x, y){

    if(x<y){
        console.log("No Error", x+y)
    }else{
        throw new EvalError("Eval error... ") //EvalError: Eval error.... 
    }
}
//f1(15, "Ten")
f1(10, 15)