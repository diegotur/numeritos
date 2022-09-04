let arrGuessNumber = [];

  function GenerarNumero(){

  let numero=[0,1,2,3,4,5,6,7,8,9];

  let gN = numero.sort(func);  

    function func(a, b) {  
      return 0.5 - Math.random();
    } 

  arrGuessNumber = gN.slice(3,7);

  guessNumber = arrGuessNumber.join("");
}

GenerarNumero();
let boton = document.getElementsByClassName ("botonClick");
let verIntento = document.getElementById ("verIntento");
let borrar = document.getElementById ("btnBorrar");
let confirmar = document.getElementById("btnConfirm");
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
  document.getElementById(elem).addEventListener("click", ()=> {Rest(document.getElementById(elem),0)});
  document.getElementById(elem).addEventListener("click", ()=> {Rest2(document.getElementById(elem))});
}

for (const elem of arrBtn){
  document.getElementById(elem).addEventListener("click", ()=> {Write(arrBtn.indexOf(elem))});
}


function Write(a) {
  if (intentos.length <4 && intentos.some ((el) => el == a) == false){
    intentos.push(a);
    x = document.getElementsByClassName("styleDiv")
    for (i=0; i<intentos.length; i++){ 
      x[i].innerText = intentos[i];
    }
  }
}

borrar.addEventListener("click", Borrar);
borrar.addEventListener("click", ()=> {Rest(borrar, 1)});
borrar.addEventListener("click", ()=> {Rest2(borrar)});
confirmar.addEventListener("click", Confirmar);
confirmar.addEventListener("click", ()=> {Rest(confirmar, 1)});
confirmar.addEventListener("click", ()=> {Rest2(confirmar)});

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

function Rest(a,b){
  if (intentos.length == 4 || intentos.some ((el) => el == a.textContent) == true){
    if (b!=1){
      a.style.backgroundColor="red";
      a.style.color="transparent";
      a.style.boxShadow = "0 0 10px inset black";
    }
  
  } else{
    a.style.color="rgba(0, 0, 0, 0.616)"
    a.style.backgroundColor= "white";
    a.style.boxShadow= "0 0 10px inset black";
}
  
}
function Rest2(a){
  setTimeout (function(){
    a.style.color="rgba(255, 255, 255, 0.616)"
    a.style.backgroundColor= "#4a3838";
    a.style.boxShadow= "0 0 0 inset black";
}, 350);
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
    const textNumber = document.createTextNode(`${intentos.join("")}`);
    let fill2 = document.createElement("div"); 
    let fill3 = document.createElement("div"); 
    let fill4 = document.createElement("div"); 
    let fill5 = document.createElement("div"); 
    let fills = [fill2, fill3, fill4, fill5];
    
    for (const elem of fills){
      elem.classList.add("chanceStyleDiv");
      console.log (fills[0]);
    }
    for (i=0; i<mb; i++){
      fills[i].style.backgroundColor = "green";
    }
    for (t=0; t<b; t++){
      if (mb == 0){
        fills[t].style.backgroundColor = "yellow";
      } else if (mb == 1){
        fills[t+1].style.backgroundColor = "yellow";
      } else if (mb == 2){
        fills[t+2].style.backgroundColor = "yellow";
      }
    }
    fill.appendChild(textNumber);
    fill.appendChild(fill2);
    fill.appendChild(fill3);
    fill.appendChild(fill4);
    fill.appendChild(fill5);

    chance++;
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

  GenerarNumero();

  let vecesChances = chance;

  chances=[];

  for (i=0;i<10;i++){
    chances.push ("chance"+i); 
  }


  for (const elem of chances){
    if (vecesChances != 0){

      for (g=0; g<5;g++){
        let f = document.getElementById(elem);
        f.removeChild(f.lastChild);
      }
      vecesChances--;
    }
  }
  chance=0;

  Borrar();
  Borrar();
  Borrar();
  Borrar();
}

