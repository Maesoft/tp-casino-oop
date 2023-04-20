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

    
}

