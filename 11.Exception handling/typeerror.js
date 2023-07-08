//Type Error
let l1 = {

}
console.log(l1.f1()) //TypeError: l1.f1 is not a function

try{
    console.log("Bussiness Logic")
}catch(e){
    console.log("Useed for Handling the exceptions")
}finally{
    console.log("Used for closing the resources")
}