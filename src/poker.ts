import { iJuegoDeCasino } from "./juegosCasino";
import { playerAction } from "./playerAction";

export class Poker extends playerAction implements iJuegoDeCasino{
    private cantDeCartas:number;
    private sumaCartas:number[];
    private pedirCarta:Carta;
    
    constructor(cantCartas:number, sumaCartas:number[], pedirCata:carta){
        super()
this.cantDeCartas = cantCartas;
this.sumaCartas = sumaCartas;
this.pedirCarta = pedirCata;
}

getCantCartas():number {
    return this.cantDeCartas;
}
setCantCartas(cantCartas:number):void{
this.cantDeCartas = cantCartas;
}

}