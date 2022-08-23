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

let x = document.getElementsByClassName ("styleDiv");

let intentos = [];

let arrBtn = [];



for (i=0;i<10;i++){
  arrBtn.push ("btn"+i); 
}

for (const elem of arrBtn){
  document.getElementById(elem).addEventListener("click", ()=> {myFunction(arrBtn.indexOf(elem))}); 
}

/* document.getElementById("btn0").addEventListener("click", ()=> {myFunction("btn0")}); 
document.getElementById("btn1").addEventListener("click", ()=> {myFunction("btn1")}); 
document.getElementById("btn2").addEventListener("click", ()=> {myFunction("btn2")}); 
document.getElementById("btn3").addEventListener("click", ()=> {myFunction("btn3")}); 
document.getElementById("btn4").addEventListener("click", ()=> {myFunction("btn4")}); 
document.getElementById("btn5").addEventListener("click", ()=> {myFunction("btn5")}); 
document.getElementById("btn6").addEventListener("click", ()=> {myFunction("btn6")}); 
document.getElementById("btn7").addEventListener("click", ()=> {myFunction("btn7")}); 
document.getElementById("btn8").addEventListener("click", ()=> {myFunction("btn8")}); 
document.getElementById("btn9").addEventListener("click", ()=> {myFunction("btn9")});  */









function myFunction(a) {
  if (intentos.length <4){
    if (intentos.some ((el) => el == a) == false){
      
        if (intentos[0] < 0 && intentos[0] > 9 && intentos[0] != undefined){
          x[0].innerText = a;
          intentos.push(a);
        }
      }
  }
  console.log(intentos);
}
    /* else{
        if (x[0] == ""){
          const textnode = document.createTextNode(a);
          x[0].innerText = node;
          intentos.push(a);
        } else if (x[1] == ""){
          const textnode = document.createTextNode(a);
          x[1].innerText = node;
          intentos.push(a);
        } else if (x[2] == ""){
          const textnode = document.createTextNode(a);
          x[2].innerText = node;
          intentos.push(a);
        } else if (x[3] == ""){
          const textnode = document.createTextNode(a);
          x[3].innerText = node;
          intentos.push(a);
        }
      }
    }
  } */ 
 

//document.getElementById("btnBorrar").addEventListener("click", Borrar);


/* function Borrar(){
  intentos.pop();
  let x = document.getElementsByClassName("styleDiv");
  for (i=0; i<x.length; i++){
    x[i].innerText = "";
  }
  for (i=0; i<intentos.length; i++){
    x[i].innerText = intentos[i];
  }

} */