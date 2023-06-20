//callback function

function f1(username, password){
    console.log('username:' + username, 'password:' + password)
}


function f2(username,password){

    uname= username
    pword=password
    f1(uname,pword)
}
f2('arman', 'arman@123')
f2('lima', 'lima@123')
f2('arsad', 'arsad@123')