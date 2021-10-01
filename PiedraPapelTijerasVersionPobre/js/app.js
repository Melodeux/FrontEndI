let jugadaUsuario = parseInt(prompt("Vamos a jugar piedra papel o tijera, escoge 1 para piedra 🥔, 2 para papel 📄, 3 para tijera ✂"));
let jugadaPc = parseInt(Math.random()*(3-1)+1);

if (verificar() == true) {
    alert("No es una opción válida. 🤷‍♀️")
} else {
    alert(juego());
    alert(jugadaPcVisual(jugadaPc));
}

function verificar (){
    if (isNaN(jugadaUsuario) || jugadaUsuario>3 || jugadaUsuario<1) {
        return true;
    }else{
        return false;
    }}

function jugadaPcVisual (jugadaPc){
   if (jugadaPc == 1) {
    return ("Computadora saca piedra 🥔 ");
} else if (jugadaPc == 2) {
    return ("Computadora saca papel 📄 ");
} else {
    return ("Computadora saca tijera ✂ ");
} 
}

function juego(){
    if (jugadaUsuario == jugadaPc){
    return("¡Empararon! 🤣");
}  else if (jugadaUsuario == 1 && jugadaPc == 3 || jugadaUsuario == 2 && jugadaPc == 3 || jugadaUsuario == 3 && jugadaPc == 2) {
    return("¡Ganaste! 😎");
} else {
    return("Perdiste 😢");
}}



// let array = [1, 2, 4, 8];
// let acumular = 0;

// for (let i = 0; i < array.length; i++) {
//     acumular += array[i]
//     console.log(acumular)
// }

// let edad = parseInt(prompt("Ingrese su edad"));

// if (isNaN(edad)){2
//     alert("No es un número.")
// } else if(edad>18) {
// console.log("Es mayor de edad");
// }else{
// console.log("Es menor de edad");
// }

//**********************
// console.log("hola desde el html");
// const nombre = "Mateo";

// alert("Gracias por ingresar "+nombre);