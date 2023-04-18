import { starGame } from "./funciones";
import { PlayGame } from "./playgame";
import * as ReadlineSync from 'readline-sync'

export class Ruleta extends PlayGame{
    private numbers:number[];
    private colors:string[];
    public constructor(){
        super();
        this.numbers=[];
        this.colors=[];
        for (let i = 0; i < 37; i++){
            this.numbers.push(i);
            if(i===0)this.colors.push("verde");
            if(i%2===0)this.colors.push("rojo");
            if(i%2===1)this.colors.push("negro");
        }
    }
    public girarRuleta(numero:number, pares:boolean, impares:boolean, rojo:boolean, negro:boolean, mayores:boolean, menores:boolean):number{
       let rl=ReadlineSync.question(`Desea apostar un pleno?
       
       1)Si
       2)No

       3)Volver al menu principal


       Seleccione una opcion: `)

       return 1;
    }
    public play(){
        let rl=Number(ReadlineSync.question(`
---------------------------------
Bienvenido al juego de la Ruleta! 
---------------------------------
                
1) Realizar apuesta
2) Instrucciones
3) Probabilidades
4) Volver al menu anterior

---------------------------------
        
Seleccione una opcion: `))   
        
        switch (rl) {
            case 1:
                
                break;
            case 2:
                
                break;
            case 3:
                
                break;
            case 4:
                console.clear();
                starGame();
                break;
        
            default:
                break;
        }
    }
    getCash() {
        
    }
    
}

 