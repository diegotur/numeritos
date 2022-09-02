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

for (const elem of arrBtn){
  document.getElementById(elem).addEventListener("click", ()=> {Write(arrBtn.indexOf(elem))});
  //document.getElementById(elem).addEventListener("click", Borrar, luz(elem) );
}


function Write(a) {
  if (intentos.length <4 && intentos.some ((el) => el == a) == false){
    intentos.push(a);
    
    x = document.getElementsByClassName("styleDiv")
    for (i=0; i<intentos.length; i++){ 
          x[i].innerText = intentos[i];
        }
  }
  console.log(intentos);
}


document.getElementById("btnBorrar").addEventListener("click", Borrar);
//document.getElementById("btnBorrar").addEventListener("mouseup", Rest);

document.getElementById("btnConfirm").addEventListener("click", Confirmar);
//document.getElementById("btnConfirm").addEventListener("mouseup", Rest);

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
/* function Rest(a){
  setTimeout (function(){
    a.style.backgroundColor="#4a3838";
    a.style.color="rgba(254, 253, 253, 0.616)";
    a.style.transition = "all 0.5s";

  }, 250);
} */
/* function luz(a){
  setTimeout (function(){
    document.getElementById(a).style.backgroundColor="white";
    document.getElementById(a).style.color="black";
    document.getElementById(a).style.transition = "all 0.5s";
  }, 250);
} */

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
  const textNumber = document.createTextNode(`${intentos.join("")}`);
  
  let fill2 = document.createElement("div"); 
  let fill3 = document.createElement("div"); 
  let fill4 = document.createElement("div"); 
  let fill5 = document.createElement("div"); 

  fill2.classList.add("chanceStyleDiv");
  fill3.classList.add("chanceStyleDiv");
  fill4.classList.add("chanceStyleDiv");
  fill5.classList.add("chanceStyleDiv");
  
  if (mb == 4){
    fill2.style.backgroundColor = "green";
    fill3.style.backgroundColor = "green";
    fill4.style.backgroundColor = "green";
    fill5.style.backgroundColor = "green";
  }
  if (mb == 3){
    fill2.style.backgroundColor = "green";
    fill3.style.backgroundColor = "green";
    fill4.style.backgroundColor = "green";
  }
  if (mb == 2){
    fill2.style.backgroundColor = "green";
    fill3.style.backgroundColor = "green";
  }
  if (mb == 1){
    fill2.style.backgroundColor = "green";
  }
  if (mb == 3 && b == 1){
    fill5.style.backgroundColor = "green";
  }
  if (mb == 2 && b == 1){
    fill4.style.backgroundColor = "yellow";
  }
  if (mb == 2 && b == 2){
    fill4.style.backgroundColor = "yellow";
    fill5.style.backgroundColor = "yellow";
  }
  if (mb == 1 && b == 3){
    fill3.style.backgroundColor = "yellow";
    fill4.style.backgroundColor = "yellow";
    fill5.style.backgroundColor = "yellow";
  }
  if (mb == 1 && b == 2){
    fill3.style.backgroundColor = "yellow";
    fill4.style.backgroundColor = "yellow";
  }
  if (mb == 1 && b == 1){
    fill3.style.backgroundColor = "yellow";
  }
  if (mb == 0 && b == 4){
    fill2.style.backgroundColor = "yellow";
    fill3.style.backgroundColor = "yellow";
    fill4.style.backgroundColor = "yellow";
    fill5.style.backgroundColor = "yellow";
  }
  if (mb == 0 && b == 3){
    fill2.style.backgroundColor = "yellow";
    fill3.style.backgroundColor = "yellow";
    fill4.style.backgroundColor = "yellow";
  }
  if (mb == 0 && b == 2){
    fill2.style.backgroundColor = "yellow";
    fill3.style.backgroundColor = "yellow";
  }
  if (mb == 0 && b == 1){
    fill2.style.backgroundColor = "yellow";
  }

  
  fill.appendChild(textNumber);
  fill.appendChild(fill2);
  fill.appendChild(fill3);
  fill.appendChild(fill4);
  fill.appendChild(fill5);

  console.log(chances);

  chances.shift();

  Borrar();
  Borrar();
  Borrar();
  Borrar();
} 
}
let restartGame = document.getElementById("btnFooter1");

restartGame.addEventListener("click", Restart);

function Restart(){
  gN = numero.sort(func);  

function func(a, b) {  
  return 0.5 - Math.random();
} 

arrGuessNumber = gN.slice(3,7);

primero = arrGuessNumber[0];
segundo = arrGuessNumber[1];
tercero = arrGuessNumber[2];
cuarto = arrGuessNumber[3];


guessNumber = arrGuessNumber.join("");

chances=[];

for (i=0;i<10;i++){
  chances.push ("chance"+i); 
}

/* for (i=0; i<10;i++){
  for (g=0; g<5;g++){ */
    /* let p = document.getElementsByClassName("chanceStyleDiv");
    p[0].remove();
    p[0].remove();
    p[0].remove();
    p[0].remove(); */
    for (g=0; g<5;g++){
    let f = document.getElementById("chance0");
    f.removeChild(f.lastChild);

    console.log(guessNumber);
  }
/*   }
} */
}

