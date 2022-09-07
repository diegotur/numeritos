const rank = JSON.parse(localStorage.getItem("ranking")) ?? [];

async function ValidarRank (a){
  if ( a.length==0){
  await fetch("ranking.json")
  .then(response => response.json())
  .then(j =>{
    localStorage.setItem ("ranking", JSON.stringify (j));
  })
}
}
ValidarRank(rank);





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
let pad = document.getElementById ("padBtn");
let result = document.getElementById ("resultados");
let borrar = document.getElementById ("btnBorrar");
let confirmar = document.getElementById("btnConfirm");
let x = document.getElementsByClassName ("styleDiv");
let ranking = document.getElementById("btnFooter4");
let mbb = document.getElementsByClassName("styleDivMbb");
let mbbBox = document.getElementsByClassName("aparecerBox");
let aciertos = document.getElementsByClassName("aciertos");
let reglas = document.getElementById("btnFooter3");
let staticbackdrop = document.getElementById("staticBackdrop");
let staticbackdrop2 = document.getElementById("staticBackdrop2");
let botonSubmit = document.getElementById("botonSubmit");
let inputSubmit = document.getElementById("submit");
let aciertosGanador = document.getElementsByClassName("modal-body");
let intentos = [];
let arrBtn = [];
let chances = [];
let chance = 0;
let chanceRank;
let mbbFill;
let mbbFix;

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
ranking.addEventListener("click", ()=> {Ranking("ranking")});
reglas.addEventListener("click", ()=> {Reglas()});
botonSubmit.addEventListener("click", ()=> {AgregarRanking()});

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
  if (arrGuessNumber[0] == intentos[0] && arrGuessNumber[1] == intentos[1] && arrGuessNumber[2] == intentos[2] && arrGuessNumber[3] == intentos[3]){
    const myModal = new bootstrap.Modal(document.getElementById('staticBackdrop2'));
    myModal.show();
    inputSubmit.focus();

    staticbackdrop2.style.visibility="visible";
    

    console.log(inputSubmit.autofocus);

    let text = document.createElement("div");
    text = `Adivinaste en ${11-chances.length} intentos`;
    aciertos[0].innerText ="";
    aciertos[0].append (text);
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
  mbbFill = ()=>{
    let textMbbFill1 = document.createElement("div");
    let textMbbFill2 = document.createElement("div");
    textMbbFill1 =`${mb}`,
    textMbbFill2 = `${b}`,
    mbb[0].innerText ="";
    mbb[1].innerText ="";
  
    mbb[0].append (textMbbFill1);
    mbb[1].append (textMbbFill2);

    mbbBox[0].style.animationName = "animate";
    mbbBox[0].style.animationDuration = "0.1s";
    mbbBox[0].style.transform = "scale(1,1)";
    }
  mbbFill();
  
  mbbFix = ()=>{
    setTimeout (function(){
      mbbBox[0].style.animationName = "animate2";
      mbbBox[0].style.animationDuration = "0.2s";
      mbbBox[0].style.transform = "scale(0,0)";

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

  chanceRank = chances.length;  

  console.log(chanceRank);
  
  const rank3 = JSON.parse(localStorage.getItem ("ranking")) ?? [];

  ValidarRank(rank3);


  if (chances.length==0){
    Perdedor();
    Restart();
  } 
  } 
} 

let restartGame = document.getElementById("btnFooter1");

restartGame.addEventListener("click", Validar);

function Validar(){

  swal({
      title: "Estás seguro?",
      cancel: "Cancelar",
      confirm: "Nuevo Juego",
      buttons: true,
      
  }).then((confirm) => {
      if (confirm) {
          Restart();
      } 
  });
}

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
}
function Reglas(){
  staticbackdrop.style.visibility="visible";
}  

function Perdedor(){

  swal({
      title: "NO HAY MÁS INTENTOS",
      text: `Lo lamento, el número era ${guessNumber}`,
      icon: "error",
      button: "Nuevo Juego",
  })
}

function Ranking (a){
  let j = JSON.parse(localStorage.getItem (a));
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
}

function AgregarRanking(){
  
  const rank4 = JSON.parse(localStorage.getItem ("ranking"));

  let inputIniciales = document.getElementById("submit").value;
      inputIniciales = inputIniciales.toUpperCase();

    if (inputIniciales !=""&& inputIniciales.length<3==false){

      rank4.push({
        iniciales: inputIniciales,
        mejorJugada:`intento Nº ${11-chanceRank}`,
        number: 11-chanceRank
      });

      function compare(a, b) {

        const num1 = a.number;
        const num2 = b.number;
      
        let comp = 0;
        if (num1 > num2) {
          comp = 1;
        } else if (num1 < num2) {
          comp = -1;
        }
        return comp;
      }
      
      rank4.sort(compare);

      localStorage.setItem ("ranking", JSON.stringify (rank4));

      
      swal({
        title: "RANKING",
        text: `${rank4[0].iniciales} - ${rank4[0].mejorJugada}
        ${rank4[1].iniciales} - ${rank4[1].mejorJugada}
        ${rank4[2].iniciales} - ${rank4[2].mejorJugada}
        ${rank4[3].iniciales} - ${rank4[3].mejorJugada}
        ${rank4[4].iniciales} - ${rank4[4].mejorJugada}
        `,
        button: "Cerrar",
      }) 
      chanceRank = 0;
  }
}
  
