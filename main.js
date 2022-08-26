let numero=[0,1,2,3,4,5,6,7,8,9];

let gN = numero.sort(func);  

function func(a, b) {  
  return 0.5 - Math.random();
} 

let arrGuessNumber = gN.slice(3,7);

let primero = arrGuessNumber[0];
let segundo = arrGuessNumber[1];
let tercero = arrGuessNumber[2];
let cuarto = arrGuessNumber[3];


guessNumber = arrGuessNumber.join("");

console.log(guessNumber, primero, segundo, tercero, cuarto);

let boton = document.getElementsByClassName ("botonClick");

let verIntento = document.getElementById ("verIntento");

let borrar = document.getElementById ("btnBorrar");

let x = document.getElementsByClassName ("styleDiv");

let intentos = [];

let arrBtn = [];

let chances = [];

let chance = 0;

for (i=0;i<10;i++){
  arrBtn.push ("btn"+i); 
  chances.push ("chance"+i); 
}
console.log(chances);

for (const elem of arrBtn){
  document.getElementById(elem).addEventListener("click", ()=> {myFunction(arrBtn.indexOf(elem))});
  //document.getElementById(elem).addEventListener("click", Borrar, luz(elem) );
}


function myFunction(a) {
  if (intentos.length <4 && intentos.some ((el) => el == a) == false){
    intentos.push(a);
    
    x = document.getElementsByClassName("styleDiv")
    for (i=0; i<intentos.length; i++){ 
          x[i].innerText = intentos[i];
        }
  }
  console.log(intentos);
}


document.getElementById("btnBorrar").addEventListener("click", Borrar) );
document.getElementById("btnBorrar").addEventListener("mouseup", Rest);

document.getElementById("btnConfirm").addEventListener("click", Confirmar, luz("btnBorrar") );
document.getElementById("btnConfirm").addEventListener("mouseup", Rest);

function Borrar(){
  intentos.pop();
  let x = document.getElementsByClassName("styleDiv");
  for (i=0; i<x.length; i++){
    x[i].innerText = "";
  }
  for (i=0; i<intentos.length; i++){
    x[i].innerText = intentos[i];
  }
  
}
function Rest(a){
  setTimeout (function(){
    a.style.backgroundColor="#4a3838";
    a.style.color="rgba(254, 253, 253, 0.616)";
    a.style.transition = "all 0.5s";

  }, 250);
}
function luz(a){
  setTimeout (function(){
    document.getElementById(a).style.backgroundColor="white";
    document.getElementById(a).style.color="black";
    document.getElementById(a).style.transition = "all 0.5s";
  }, 250);
}

function Confirmar(){
  if (intentos.length== 4){
  b = 0;
  mb = 0;
  
  for (i=0; i<intentos.length; i++){
    if (intentos[i] == arrGuessNumber[i]){
      mb++
    } else if(arrGuessNumber.includes (intentos[i]) == true){
      b++
    }
  }

  let fill = document.getElementById (chances[0]);
  const textNumber = document.createTextNode(`${intentos.join("")}      ${mb}      ${b}`);
  fill.classList.add('chanceStyleDiv');
  fill.appendChild(textNumber);

  console.log(textNumber);

  chances.shift();

  Borrar();
  Borrar();
  Borrar();
  Borrar();
} 
}