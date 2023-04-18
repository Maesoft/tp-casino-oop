import * as ReadlineSync from 'readline-sync'
import { Ruleta } from './ruleta';

const ruleta= new Ruleta();

export function checkAge():void{
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

export function starGame():void{
let rl=Number(ReadlineSync.question(`
********************************
* BIENVENIDO AL CASINO VIRTUAL *
********************************
Seleccione una opcion:
1) Blackjack
2) Poker
3) Ruleta
4) Tragamonedas Tradicional
5) Tragamonedas Progresiva

9) Salir

Seleccione una opcion: `))

switch (rl) {
    case 1:
        
        break;
    case 2:

        break;
    case 3:
        console.clear();
        ruleta.play();
        break;
    case 4:
        
        break;
    case 5:
        
        break;
    case 9:
        console.clear();
        console.log("Gracias por venir, vuelva pronto!");
        
        break;

    default:
        console.clear()
        console.log("Intruduzca una opcion valida.");    
        break;
}
}