let arrGuessNumber = [];

  function GenerarNumero(){

  let numero=[0,1,2,3,4,5,6,7,8,9];

  let gN = numero.sort(func);  

    function func(a, b) {  
      return 0.5 - Math.random();
    } 

  arrGuessNumber = gN.slice(3,7);

  guessNumber = arrGuessNumber.join("");

  console.log(guessNumber);
}

GenerarNumero();
let boton = document.getElementsByClassName ("botonClick");
let verIntento = document.getElementById ("verIntento");
let borrar = document.getElementById ("btnBorrar");
let confirmar = document.getElementById("btnConfirm");
let x = document.getElementsByClassName ("styleDiv");
let ranking = document.getElementById("btnFooter4");
let mbb = document.getElementsByClassName("styleDivMbb");
let mbbBox = document.getElementById("box");
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
ranking.addEventListener("click", ()=> {Ranking("ranking.json")});

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
  console.log(intentos[0],intentos[1],intentos[2],intentos[3]);
  if (arrGuessNumber[0] == intentos[0] && arrGuessNumber[1] == intentos[1] && arrGuessNumber[2] == intentos[2] && arrGuessNumber[3] == intentos[3]){
    Ganador();
    Restart();
  } else{
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
  let mbbFill = ()=>{
      let textMbbFill1 = document.createElement("div");
      let textMbbFill2 = document.createElement("div");
      textMbbFill1 =`${mb}`,
      textMbbFill2 = `${b}`,
      mbb[0].innerText ="";
      mbb[1].innerText ="";
    
      mbb[0].append (textMbbFill1);
      mbb[1].append (textMbbFill2);
    
      mbbBox.style.width = "100%";
      mbbBox.style.transition= "all 0.1s";
      mbbBox.style.visibility= "visible";

      
      }
  mbbFill();
  
  let mbbFix = ()=>{
    setTimeout (function(){
      mbbBox.style.transform = "scale (2,2)";
      mbbBox.style.transition= "all 1s";

      mbbBox.style.visibility= "hidden";

      }, 3350);
  }
  mbbFix();

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

  
  
  if (chances.length==0){
    Perdedor();
    Restart();
  } 
  } 
} 
}
let restartGame = document.getElementById("btnFooter1");

restartGame.addEventListener("click", Validar);

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
  
function Validar(){

  swal({
      title: "Estás seguro?",
      cancel: "Cancelar",
      confirm: "Nuevo Juego",
      icon: "warning",
      buttons: true,
      
  }).then((confirm) => {
      if (confirm) {
          Restart();
      } 
  });
}


function Ganador(){

  swal({
      text: `Adivinaste en ${11-chances.length} intentos `,
      button: "Nuevo Juego",
      content: {
        element: "input",
        attributes: {
          placeholder: "Ingresá tus iniciales",
          color: "red",
          type: "text",
        },
        inputAttributes:{
          color: "red",
          background: "black",
        }
      },
  })
}

function Perdedor(){

  swal({
      title: "NO HAY MÁS INTENTOS",
      text: `Lo lamento, el número era ${guessNumber}`,
      icon: "error",
      button: "Nuevo Juego",
  })
}

async function Ranking (a){
  await fetch(a)
  .then(response => response.json())
  .then(j =>{
    swal({
      title: "RANKING",
      text: `${j[0].iniciales} - ${j[0].mejorJugada}
      ${j[1].iniciales} - ${j[1].mejorJugada}
      ${j[2].iniciales} - ${j[2].mejorJugada}
      ${j[3].iniciales} - ${j[3].mejorJugada}
      ${j[4].iniciales} - ${j[4].mejorJugada}
      `,
      button: "Cerrar",
  })
  })
}
  