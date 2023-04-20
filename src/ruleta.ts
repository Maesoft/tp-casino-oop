import { PlayGame } from "./playgame";
import { starGame } from "./app";
import {Player} from "./player"
import * as ReadlineSync from 'readline-sync'

export class Ruleta extends PlayGame{
    private numbers:number[]; 
    private colors:string[]; 


    private pleno:number;
    private pares:boolean; 
    private impares:boolean; 
    private rojo:boolean; 
    private negro:boolean; 
    private mayores:boolean; 
    private menores:boolean;
    
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
    
    public play(){

        let rl=Number(ReadlineSync.question(

            `---------------------------------
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
                console.clear();
                this.apuesta();
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
    getCash():number {
        
    }
    public apuesta():void{
  
        let rl=Number(ReadlineSync.question(
 
       `Desea apostar un pleno?
        
        1)Si
        2)No
 
        3)Volver al menu principal
 
 
        Seleccione una opcion: `))

        switch (rl) {
            case 1:
                rl=Number(ReadlineSync.question(
 
                 `Ingrese el numero que desea apostar al pleno
                     
                              
                 Ingrese un numero del 0 al 36: `))
                if(rl>=0&&rl<37){
                    this.pleno=rl;
                }else{
                    console.log("Ingrese una apuesta valida!");
                    this.apuesta();
                }
                break;
            case 2:

                break
            case 3:
                console.clear();
                this.play();
                break
            default:
                console.clear();
                console.log("Ingrese una opcion valida");
                this.apuesta();
                break;
        }
             rl=Number(ReadlineSync.question(
 
                    `Desea apostar a pares?
                     
                     1)Si
                     2)No
              
                     3)Volver al menu principal
              
              
                     Seleccione una opcion: `))
            switch (rl){
                case 1:
                    this.pares=true;

                    break;
                case 2:
                    
                    break;
                case 3:
                    
                    break;
            
                default:
                    break;
            }


     }   
}

 