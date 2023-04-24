import * as ReadlineSync from 'readline-sync'
import { Ruleta } from './ruleta';
import { Poker } from './poker';
import { Tragamonedas } from './tragamoneda';
import { TragamonedasPro } from './tragamonedaspro';
import { Player } from './player';
import { Blackjack } from './blackjack';

const mensajeSinCredito:string="No tiene creditos suficientes para jugar. \nPresione 'Enter' para continuar."
const mensajeOpcioninvalida:string="Ingrese una opcion valida. \nPresione 'Enter' para continuar."

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
                console.log(mensajeSinCredito);
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
                
                this.jugarRuleta();
                
                break;
            case 4:
                this.jugarTragamoneda();
                break;
            case 5:
                
                break;
            case 9:
                console.clear();
                console.log("Gracias por venir, vuelva pronto!");
                
                break;
        
            default:
                console.clear()
                console.log(mensajeOpcioninvalida);    
                this.menu();
                break;
        }
    }
        
    public jugarRuleta():void{
    
        console.clear();
        if(this.player.getAmount()>0){
            this.ruleta.play(this.player.getAmount());
            this.player.setAmount(this.ruleta.getCash());
        }else{
            console.log(mensajeSinCredito)
        }
        this.menu();
    }
    public jugarTragamoneda():void{
    
        console.clear();
        if(this.player.getAmount()>0){
            this.tragamonedas.play(this.player.getAmount());
            this.player.setAmount(this.tragamonedas.getCash());
        }else{
            console.log(mensajeSinCredito)
        }
        this.menu();
    }

    public getNombre():string{
        return this.nombre;
    }

}

