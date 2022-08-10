let numero=[0,1,2,3,4,5,6,7,8,9];

let gN = numero.sort(func);  

function func(a, b) {  
  return 0.5 - Math.random();
} 
   
let arrGuessNumber = gN.slice(3,7);

guessNumber = arrGuessNumber.join("");

//console.log(guessNumber);

let boton = document.getElementsByClassName ("botonClick");

let verIntento = document.getElementById ("verIntento");

let intentos = [];


document.getElementById("btn0").addEventListener("click", ()=> {myFunction("0")});
document.getElementById("btn1").addEventListener("click", ()=> {myFunction("1")});
document.getElementById("btn2").addEventListener("click", ()=> {myFunction("2")});
document.getElementById("btn3").addEventListener("click", ()=> {myFunction("3")});
document.getElementById("btn4").addEventListener("click", ()=> {myFunction("4")});
document.getElementById("btn5").addEventListener("click", ()=> {myFunction("5")});
document.getElementById("btn6").addEventListener("click", ()=> {myFunction("6")});
document.getElementById("btn7").addEventListener("click", ()=> {myFunction("7")});
document.getElementById("btn8").addEventListener("click", ()=> {myFunction("8")});
document.getElementById("btn9").addEventListener("click", ()=> {myFunction("9")});


function myFunction(a) {
    if (intentos.length <4){
        const node = document.createElement("div");
        const textnode = document.createTextNode(a);
        node.classList.add('styleDiv');
        node.appendChild(textnode);
        console.log (node, textnode);
        verIntento.appendChild(node);
        intentos.push(a);
        console.log(intentos);
    }
    }