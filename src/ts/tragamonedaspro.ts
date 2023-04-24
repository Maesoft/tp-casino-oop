import { Tragamonedas } from "./tragamoneda";
import * as ReadlineSync from 'readline-sync'
import * as fs from 'fs';

const probabilidades=fs.readFileSync("../txt/slot2.txt","utf-8");
const mensajeSinCredito:string="No tiene creditos suficientes para jugar. \nPresione 'Enter' para continuar."
const mensajeOpcioninvalida:string="Ingrese una opcion valida. \nPresione 'Enter' para continuar."

export class TragamonedasPro extends Tragamonedas{
    private cantLineas:number;
    private jackpot:number;

    public constructor(cantRodillos:number, elementosRodillo:string[]){
        
        super(cantRodillos,elementosRodillo);
        this.cantLineas=3;
        this.jackpot=300;
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
                this.creditos>3? this.tirarPalanca() : ReadlineSync.question(mensajeSinCredito);
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
    public tirarPalanca():void{
        let premio=0;
        this.creditos-=3
        console.clear();
        let resultado1:string[]=[];
        let resultado2:string[]=[];
        let resultado3:string[]=[];
        let aleatorio:number=0;
        for(let i=0; i<this.cantRodillos;i++){
            aleatorio=Math.floor(Math.random()*this.elementosRodillo.length);
            resultado1.push(this.elementosRodillo[aleatorio])
            aleatorio=Math.floor(Math.random()*this.elementosRodillo.length);
            resultado2.push(this.elementosRodillo[aleatorio])
            aleatorio=Math.floor(Math.random()*this.elementosRodillo.length);
            resultado3.push(this.elementosRodillo[aleatorio])
        }

        console.log(`
        __________________________
        |        SLOT 777        |
        *************************|    @
        | ${resultado1.join(" | ")} |  //
        | ${resultado2.join(" | ")} | //
        | ${resultado3.join(" | ")} |//
        **************************/
        |________________________|
        `);
        premio+=this.comprobarPremio(resultado1);
        premio+=this.comprobarPremio(resultado2);
        premio+=this.comprobarPremio(resultado3);
        premio+=this.comprobarJackpot(resultado1);
        premio+=this.comprobarJackpot(resultado2);
        premio+=this.comprobarJackpot(resultado3);
        this.creditos+=premio;
        ReadlineSync.question("    Presione 'Enter' para continuar."    )
        this.play(this.creditos);
       }
       public comprobarJackpot(array:string[]):number{
        let premio=0;
        if(array[0]==="🍀"&&array[1]==="🍀"&&array[2]==="🍀"&&array[3]==="🍀"&&array[4]==="🍀"){
            premio=this.jackpot
            console.log(`¡¡¡Felicidades has ganado el JACKPOT!!! Has ganado ${this.creditos} creditos.`); 
        }
        return premio;
       }
}