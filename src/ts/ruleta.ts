import { PlayGame } from "./playgame";
import * as ReadlineSync from 'readline-sync';
import * as fs from 'fs';
const instrucciones=fs.readFileSync("../txt/instruccionesRuleta.txt","utf-8");
const probabilidades=fs.readFileSync("../txt/probabilidadesRuleta.txt","utf-8");
const mensajeSinCredito:string="No tiene creditos suficientes para jugar. \nPresione 'Enter' para continuar."
const mensajeOpcioninvalida:string="Ingrese una opcion valida. \nPresione 'Enter' para continuar."
export class Ruleta extends PlayGame{
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

        this.colors=[];
        for (let i = 0; i < 37; i++){

            if(i===0)this.colors.push("Verde");
            if(i%2===0)this.colors.push("Rojo");
            if(i%2===1)this.colors.push("Negro");
        }
     this.resetApuesta();
    }
    
    public play(creditos:number):number{
    console.clear();
    this.creditos=creditos;
    let rl=Number(ReadlineSync.question(

`---------------------------------
Bienvenido al juego de la Ruleta! 
---------------------------------
                
1) Realizar apuesta
2) Instrucciones
3) Probabilidades
4) Volver al menu principal

---------------------------------
Creditos: ${this.creditos}

Seleccione una opcion: `))   

        
        switch (rl) {
            case 1:
                console.clear();
                this.creditos>0? this.apuesta() : ReadlineSync.question(mensajeSinCredito);
                break;
            case 2:
                console.clear()
                console.log(instrucciones);
                ReadlineSync.question("Presione 'Enter' para continuar.");
                this.play(this.creditos);
                break;
            case 3:
                console.clear();
                console.log(probabilidades);
                ReadlineSync.question("Presione 'Enter' para continuar.")
                this.play(this.creditos);
                break;
            case 4:
                console.clear();
                break;

            default:
                ReadlineSync.question(mensajeOpcioninvalida);
                this.play(this.creditos)
                break;
            }
        return this.creditos
    }       

    public getCash():number {
    return this.creditos;
    }

    public apuesta():void{
        console.clear();
        this.resetApuesta();
        let rl=Number(ReadlineSync.question(
 
`Desea apostar un pleno?
        
1)Si
2)No
 
3)Volver al menu principal
 
 
Seleccione una opcion: `))

        switch (rl) {
            case 1:
                console.clear();
                rl=Number(ReadlineSync.question(
                `Ingrese el numero que desea apostar al pleno
                     
                              
                 Ingrese un numero del 0 al 36: `))
                if(rl>=0&&rl<37){
                    this.pleno=rl;
                    this.creditos--
                }else{
                    console.clear();
                    ReadlineSync.question(mensajeOpcioninvalida)
                    this.apuesta();
                    return;
                }
                break;
            case 2:
                
                break
            case 3:
                this.cancelarApuesta();
                break
            default:
                console.clear();
                ReadlineSync.question(mensajeOpcioninvalida)
                this.apuesta();
                break;
        }
        console.clear();
        rl=Number(ReadlineSync.question(
`Desea apostar a pares?
                     
1)Si
2)No
              
3)Volver al menu principal
              
              
Seleccione una opcion: `))

            switch (rl){
                case 1:
                    if(this.creditos>0){
                    this.pares=true;
                    this.creditos--
                    }else{
                        ReadlineSync.question(mensajeSinCredito)
                        console.clear();
                        }
                    break;
                case 2:
                    
                    break;
                case 3:
                    this.cancelarApuesta();
                    return;
            
                default:
                    console.clear();
                    ReadlineSync.question(mensajeOpcioninvalida)
                    this.apuesta();
                    break;
            }
        console.clear();
        rl=Number(ReadlineSync.question(
 
`Desea apostar a impares?
                     
1)Si
2)No
              
3)Volver al menu principal
              
              
Seleccione una opcion: `))
               
            switch (rl){
                case 1:
                    if(this.creditos>0){
                        this.impares=true;
                        this.creditos--
                        }else{
                            ReadlineSync.question(mensajeSinCredito)
                            console.clear();
                        }
                    break;
                case 2:
                    
                    break;
                case 3:
                    this.cancelarApuesta();
                    return
                    break;
            
                default:
                    console.clear();
                    ReadlineSync.question(mensajeOpcioninvalida)
                    this.apuesta();
                    break;
            }
        console.clear();
        rl=Number(ReadlineSync.question(
 
`Desea apostar a rojo?
                      
1)Si
2)No
               
3)Volver al menu principal
               
               
Seleccione una opcion: `))
                
             switch (rl){
                 case 1:
                    if(this.creditos>0){
                        this.rojo=true;
                        this.creditos--
                        }else{
                            ReadlineSync.question(mensajeSinCredito)
                            console.clear();
                        }
                     break;
                 case 2:
                     
                     break;
                 case 3:
                     this.cancelarApuesta();
                     return
             
                 default:
                    console.clear();
                    ReadlineSync.question(mensajeOpcioninvalida)
                    this.apuesta();
                    break;
             }
             console.clear();
             rl=Number(ReadlineSync.question(
 
`Desea apostar a negro?
                      
1)Si
2)No
               
3)Volver al menu principal
               
               
Seleccione una opcion: `))
                
             switch (rl){
                 case 1:
                    if(this.creditos>0){
                        this.negro=true;
                        this.creditos--
                        }else{
                            ReadlineSync.question(mensajeSinCredito)
                            console.clear();
                        }
                     break;
                 case 2:
                     
                     break;
                 case 3:
                    this.cancelarApuesta();
                     return 
        
                 default:
                     console.clear();
                     ReadlineSync.question(mensajeOpcioninvalida)
                     this.apuesta();
                     break;
             }
             console.clear();
             rl=Number(ReadlineSync.question(
 
`Desea apostar a menores?
                      
1)Si
2)No
               
3)Volver al menu principal
               
               
Seleccione una opcion: `))
                
             switch (rl){
                 case 1:
                    if(this.creditos>0){
                        this.menores=true;
                        this.creditos--
                        }else{
                             ReadlineSync.question(mensajeSinCredito)
                             console.clear();
                        }
                     break;
                 case 2:
                     
                     break;
                 case 3:
                     this.cancelarApuesta();
                     return;
             
                 default:
                     console.clear();
                     ReadlineSync.question(mensajeOpcioninvalida)
                     this.apuesta();
                     break;
             }
             console.clear();
             rl=Number(ReadlineSync.question(
 
`Desea apostar a mayores?
                      
1)Si
2)No
               
3)Volver al menu principal
               
               
Seleccione una opcion: `))
                
             switch (rl){
                 case 1:
                    if(this.creditos>0){
                        this.mayores=true;
                        this.creditos--
                        }else{
                            ReadlineSync.question(mensajeSinCredito)
                            console.clear();
                        }
                     break;
                 case 2:
                     
                     break;
                 case 3:
                     this.cancelarApuesta();
                     return;
             
                 default:
                     console.clear();
                     ReadlineSync.question(mensajeOpcioninvalida)
                     this.apuesta();
                     break;
             }
             console.clear();
             console.log("Comienza a girar la ruleta...");
             this.girarRuleta()
     }   
     public girarRuleta(){
        let premio=0;
        const nroGanador:number=Math.round(Math.random()*36);
        const colorGanador:string=this.colors[nroGanador];
        let parImpar:string="Impar";
        let menorMayor:string="Menor"
        if(nroGanador%2===0)parImpar="Par";
        if(nroGanador>18)menorMayor="Mayor"
        console.log(`
        ¡El numero ganador es el ${nroGanador}! ${colorGanador}, ${parImpar}, ${menorMayor}
        
        `);
        let rl=ReadlineSync.question("Presione 'Enter' para continuar.")
        console.clear();
        if(nroGanador===this.pleno){
            premio+=36;
            console.log("Felicidades gano 36 creditos, acerto un pleno!");
        }
        if(colorGanador==="Rojo"&&this.rojo===true){
            premio+=2;
            console.log("Felicidades gano 2 creditos, acerto al Rojo!");
        }
        if(colorGanador==="Negro"&&this.negro===true){
            premio+=2;
            console.log("Felicidades gano 2 creditos, acerto al Negro!");
        }
        if(parImpar==="Impar"&&this.impares===true){
            premio+=2;
            console.log("Felicidades gano 2 creditos, acerto al Impar!");
        }
        if(parImpar==="Par"&&this.pares===true){
            premio+=2;
            console.log("Felicidades gano 2 creditos, acerto al Par!");
        }
        if(menorMayor==="Menor"&&this.menores===true){
            premio+=2;
            console.log("Felicidades gano 2 creditos, acerto al Menor!");
        }
        if(menorMayor==="Mayor"&&this.mayores===true){
            premio+=2;
            console.log("Felicidades gano 2 creditos, acerto al Mayor!");
        }
        if(premio>0){
            console.log(`Usted gano en esta jugada ${premio} creaditos.`);
            this.creditos+=premio;   
        }else{
            console.log(`No tuvo suerte, no pudo acertar ninguna apuesta.
            
            `);
        }
        ReadlineSync.question("Presione 'Enter' para continuar.")
        console.clear();
        this.resetApuesta();
     }
     private resetApuesta() {
             this.pleno=-1;
             this.pares=false; 
             this.impares=false; 
             this.rojo=false; 
             this.negro=false; 
             this.mayores=false; 
             this.menores=false;
     }
     private cancelarApuesta(){
        if(this.pleno>-1)this.creditos++
        if(this.pares)this.creditos++
        if(this.impares)this.creditos++
        if(this.rojo)this.creditos++
        if(this.negro)this.creditos++
        if(this.menores)this.creditos++
        if(this.mayores)this.creditos++
        console.clear();
        this.resetApuesta();
        this.play(this.creditos);
     }
}
