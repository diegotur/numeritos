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

let arrBtn = [];



for (i=0;i<10;i++){
  arrBtn.push ("btn"+i); 
}

for (const elem of arrBtn){
  document.getElementById(elem).addEventListener("click", ()=> {myFunction(arrBtn.indexOf(elem))}); 
}


function myFunction(a) {
    if (intentos.length <4){
      if (intentos.some ((el) => el == a) == false){
        let x = document.getElementsByClassName("styleDiv");
        if (x < 4 == true){
          const node = document.createElement("div");
          const textnode = document.createTextNode(a);
          node.classList.add('styleDiv');
          node.appendChild(textnode);
          verIntento.appendChild(node);
          intentos.push(a);
          console.log (intentos);
        } else{
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
      }  
    }
   

    document.getElementById("btnBorrar").addEventListener("click", Borrar);


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