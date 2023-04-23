import * as ReadlineSync from 'readline-sync'
import { Ruleta } from './ruleta';
import { Poker } from './poker';
import { Tragamonedas } from './tragamoneda';
import { TragamonedasPro } from './tragamonedaspro';
import { Player } from './player';
import { Blackjack } from './blackjack';

export class Casino{

    private nombre:string
    private ruleta:Ruleta;
    private blackjack:Blackjack;
    private poker:Poker;
    private tragamonedas:Tragamonedas;
    private tragamonedasPro:TragamonedasPro;
    private player:Player;

    public constructor(player:Player){
        this.nombre="Casino Virtual Las Flores"
        this.ruleta=new Ruleta();
        this.blackjack=new Blackjack();
        this.poker=new Poker()
        this.tragamonedas=new Tragamonedas();
        this.tragamonedasPro=new TragamonedasPro();
        this.player=player;
    }

    public newGame(){
        console.clear();
        if(this.player.getAge()>17){
            if(this.player.getAmount()>0&&!isNaN(this.player.getAmount())){
                this.menu() 
            }else{
                console.log("No tiene creditos suficientes para jugar.");
            }   
        }else{
        console.log(`Debe ser mayor de edad para jugar en ${this.getNombre()}.`);
    }
}
    
public menu():void{
console.clear();
console.log(`
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

Creditos: ${this.player.getAmount()}
`)

let rl=Number(ReadlineSync.question(`Seleccione una opcion: `))
        
        switch (rl) {
            case 1:
                
                break;
            case 2:
        
                break;
            case 3:
                console.clear();
                this.jugarRuleta();
                
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
                this.menu();
                break;
        }
    }
        
    public jugarRuleta():void{
        this.player.getAmount()>0? this.player.setAmount(this.ruleta.play(this.player.getAmount())) : console.log("No tiene creditos suficientes para jugar.");
        this.menu();
    }

    public getNombre():string{
        return this.nombre;
    }

}

