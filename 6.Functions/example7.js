// Higher order function

function f1(){
    console.log('outer function')

    return function(){
        console.log('inner function')
    }
}

f = f1()
f()



//passing with arguments

function f1(username){
    console.log(username)

    return function(password){
        console.log(password)
    }
}

f = f1('arman')
f('admin123')
