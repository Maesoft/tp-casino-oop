import { PlayGame } from "./playgame";
import * as ReadlineSync from 'readline-sync';
import * as fs from 'fs';

const probabilidades=fs.readFileSync("../txt/slot.txt","utf-8");
const mensajeSinCredito:string="No tiene creditos suficientes para jugar. \nPresione 'Enter' para continuar."
const mensajeOpcioninvalida:string="Ingrese una opcion valida. \nPresione 'Enter' para continuar."

export class Tragamonedas extends PlayGame{
    
    protected cantRodillos:number;
    protected elementosRodillo:string[];
    public constructor(cantRodillos:number, elementosRodillo:string[]){
        super();
        this.cantRodillos=cantRodillos;
        this.elementosRodillo=elementosRodillo;
    }
    public play(creditos: number): void {
        this.creditos=creditos;
        console.clear();
        console.log(`
--------------------------------------
|  🍀🍀🍀  SLOT GOODLUCK  🍀🍀🍀  |
--------------------------------------
|1) Tirar Palanca                    |
|2) Probabilidades y Premios         |
|                                    |
|                                    |
|3) Volver al menu principal         |
|                                    |
|                                    |
|------------------------------------|
 Creditos: ${this.creditos}          
|------------------------------------|`);
const rl=Number(ReadlineSync.question("Seleccione una opcion: "))
        switch (rl) {
            case 1:
                this.creditos>0? this.tirarPalanca() : ReadlineSync.question(mensajeSinCredito);
                break;
            case 2:
                console.clear()
                console.log(probabilidades);
                ReadlineSync.question("Presione 'Enter' para continuar.");
                this.play(this.creditos)
                break;
            case 3:
                console.clear();
                break;
        
            default:
                ReadlineSync.question(mensajeOpcioninvalida);
                this.play(this.creditos)
                break;
                break;
        }
}
    public getCash():number {
     return this.creditos;
    }
    public tirarPalanca():void{
        let premio=0;
        this.creditos--
        console.clear();
        let resultado:string[]=[];
        let aleatorio:number=0;
        for(let i=0; i<this.cantRodillos;i++){
            aleatorio=Math.floor(Math.random()*this.elementosRodillo.length);
            resultado.push(this.elementosRodillo[aleatorio])
        }

        console.log(`
        ________________
        |Slot  GOODLUCK|
        ****************  @
        | ${resultado.join(" | ")} | //
        ****************//
        |______________|`);
        premio=this.comprobarPremio(resultado);
        this.creditos+=premio;
        ReadlineSync.question("Presione 'Enter' para continuar.")
        this.play(this.creditos);
       }
    public comprobarPremio(array:string[]):number{
        let premio=0;
        if(array[0]===array[1]&&array[1]===array[2]&&array[2]===array[3]&&array[3]===array[4]&&array[4]===array[5]){
            premio=15000
            console.log(`Esto es casi imposible!! ganaste 15.000 creditos!!`); 
            return premio;
        }else if(array[0]===array[1]&&array[1]===array[2]&&array[2]===array[3]&&array[3]===array[4]){
            premio=3000
            console.log(`Guaaaaauuu! acertó 5 combinaciones! ganaste 3.000 creditos.`);
            return premio;
        }else if(array[0]===array[1]&&array[1]===array[2]&&array[2]===array[3]){
            premio=500
            console.log(`Increible!!! ganaste 500 creditos.`); 
            return premio;
        }else if(array[0]===array[1]&&array[1]===array[2]){
            premio=30
            console.log(`Genial!! ganaste 30 creditos.`);
            return premio;
        }else if(array[0]===array[1]){
            premio=2;
            console.log(`Felicidades ganaste 2 creditos.`);
            return premio;
        }
        return 0;
        
    }
    



}