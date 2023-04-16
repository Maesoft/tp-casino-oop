import { Card } from "./card";
import { iJuegoDeCasino } from "./juegosCasino";
import { PlayGame } from "./playgame";

export class Poker extends PlayGame implements iJuegoDeCasino{
    private cantDeCartas:number;
    private sumaCartas:number[];
    private pedirCarta:Card;
    
    constructor(cantCartas:number, sumaCartas:number[], pedirCarta:Card){
        super()
this.cantDeCartas = cantCartas;
this.sumaCartas = sumaCartas;
this.pedirCarta = pedirCarta;
}

getCantCartas():number {
    return this.cantDeCartas;
}
setCantCartas(cantCartas:number):void{
this.cantDeCartas = cantCartas;
}

}