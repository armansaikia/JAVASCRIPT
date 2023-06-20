//pure function and impure function

function f1() {

    const n=5;
    return n * n;
}
console.log(f1())

  
//impure function

const n =5 
function f2(){
    return n*n 
}
console.log(f2())


//pure function

function f3(username,password){

    if(username == 'admin' && password == 'admin'){

    console.log('Login Success')
    }

    else{
        console.log('Login Fail')
    }
}
f3('admin','admin')


//impure function

function f4(username,password){
    username = 'arman'

    if(username == 'admin' && password == 'admin'){

    console.log('Login Success')
    }

    else{
        console.log('Login Fail')
    }
}
f4('admin','admin')