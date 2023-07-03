var a = document.querySelector("#id1") //we use # in ID
a.style.backgroundColor = "green"


var a = document.querySelector(".L1") //we use . in class 
a.style.backgroundColor = "yellow"





// querySelectorAll ----> it applies to the whole content

var a = document.querySelectorAll(".L1") //using for loop
for( var i=0; i < a.length;i++){
    a[i].style.backgroundColor = "Red"
}



var a = document.querySelectorAll("#id2") 
for( var i=0; i < a.length;i++){
    a[i].style.backgroundColor = "blue"
}
