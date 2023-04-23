export abstract class PlayGame {
    protected creditos : number;
    
    constructor(){
        this.creditos=0;
    }

    public abstract play(creditos:number):void;
    public abstract getCash():void;
                                                    
}