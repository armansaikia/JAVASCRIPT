
//three ways of declaring a function--------------->


//function----------One
function f1(){

    console.log('function f1')
}
f1()


//assigning function to variable----------.two

function f2(){
    return "function f2"
}

//arrow function--------------. Three

f3 = () => {console.log('Arrow function')}
console.log(typeof(f3)) //function
f3()