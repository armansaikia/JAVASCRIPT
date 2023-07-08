function f1(x, y){

    if(x<y){
        console.log("No Error")
    }else{
        throw new RangeError("Range error... ") //RangeError: Range error... 
    }
}
f1(15, 10)