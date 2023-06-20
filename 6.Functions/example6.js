//function with arguments

function f1(username,password){

    console.log('username,password')
}
f1('arman', 'saikia')


//assigning function to variable

function f2(username,password){
    return username + "" +password
}

f =f2
console.log(f2('arman','saikia'))

//arrow function

f3 = (username,password) => {console.log('username','password')}
console.log(typeof(f3)) //function
f3('Arman','Saikia')