import * as ReadlineSync from 'readline-sync'
function checkAge():void{
    let rl=Number(ReadlineSync.question("Ingrese su edad:"))    
    if(!isNaN(rl)){
        if(rl>17){
            console.clear();
            starGame();
        }else{
            console.clear();
            console.log("Tienes que ser mayor de edad para jugar.");
        }
    }else{
        console.clear();
        console.log("Ingrese un numero.");
        checkAge();
    }
}
function starGame():void{
let rl=Number(ReadlineSync.question(`
******************************
*BIENVENIDO AL CASINO VIRTUAL*
******************************
Seleccione una opcion:
1) Blackjack
2) Poker
3) Ruleta
4) Tragamonedas Tradicional
5) Tragamonedas Progresiva
6) Informacion e Instrucciones
7) Salir
`))

switch (rl) {
    case 1:
        
        break;
    case 2:
        
        break;
    case 3:
        
        break;
    case 4:
        
        break;
    case 5:
        
        break;
    case 6:
        
        break;
    case 7:
        
        break;

    default:
        console.clear()
        console.log("Intruduzca una opcion valida.");
        starGame();       
        break;
}
}
checkAge();