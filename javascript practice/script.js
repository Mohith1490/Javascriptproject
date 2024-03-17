let start = document.getElementById("start");
var inpu = document.getElementsByClassName("input");
let num = document.getElementById("num-dis");
start.addEventListener('click', ()=>{
    var x = Math.floor(Math.random()*100);
    if(inpu == x){
        return document.getElementById("num-dis").innerHTML = "you guessed correctly the number is" + x;
    }
    else{
        return document.getElementById("num-dis").innerHTML = "you gussed wrong number,the number is:" + x;
    }
})
let remove = document.getElementById("resets");
remove.addEventListener('click',()=>{
    document.getElementById("num-dis").innerHTML = null;
    document.getElementById("input2").value = null;
   }
   )