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
    public play(){
        console.clear();
        let rl=Number(ReadlineSync.question(`
        Bienvenido al juego de la Ruleta!
        ---------------------------------`))        
    }
    getCash() {
        
    }
    
}
const ruleta=new Ruleta();
 