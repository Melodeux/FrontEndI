let userSelection = parseInt(prompt("Vamos a jugar piedra papel o tijera, escoge 1 para piedra 🥔, 2 para papel 📄, 3 para tijera ✂"));
let pcSelection = parseInt(Math.random()*(4-1)+1);

if (verifyUser() == true) {
    alert("No es una opción válida. 🤷‍♀️")
} else {
    alert(game());
    alert(pcSelectionVisual(pcSelection));
}

function verifyUser(){
    if (isNaN(userSelection) || userSelection>3 || userSelection<1) {
        return true;
    }else{
        return false;
    }}

function pcSelectionVisual (pcSelection){
   if (pcSelection == 1) {
    return ("Computadora saca piedra 🥔 ");
} else if (pcSelection == 2) {
    return ("Computadora saca papel 📄 ");
} else {
    return ("Computadora saca tijera ✂ ");
} 
}

function game(){
    if (userSelection == pcSelection){
    return("¡Empataron! 🤣");
}  else if (userSelection == 1 && pcSelection == 3 || userSelection == 2 && pcSelection == 1 || userSelection == 3 && pcSelection == 2) {
    return("¡Ganaste! 😎");
} else {
    return("Perdiste 😢");
}}