//variables
//global variables

var username = "sai kiran"

function getVariable(){
    console.log('Global v inside: ', username) // Global v inside:  sai kiran
}

console.log('Global v outside: ', username) //Global v outside:  sai kiran

getVariable()




//local variables
function setVariable(){
    uname = "k sai kiran"
    console.log("Local v inside: ", uname)
}
//console.log("Local v outside: ", uname) // ReferenceError: uname is not defined
setVariable() // Local v inside:  k sai kiran