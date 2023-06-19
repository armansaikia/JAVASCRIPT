//function calling another function
function f1(){
    console.log("function f1")
    f2()
}
function f2(){
    console.log("function f2")
}
f1()
f1()



//assign function to variable
function f3(){
    console.log("function f3")
}
f = f3
f()
console.log(typeof(f)) // function



//assign function to variable using arguments
function f4(uname, password){
    console.log(uname, password)
}
f = f4
f('sai', 'kiran')
console.log(typeof(f)) // function