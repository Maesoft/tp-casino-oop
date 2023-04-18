export abstract class PlayGame {
    protected premio : number;
    
    constructor(){
        this.premio=0;
    }

    public abstract play():void;
    public abstract getCash():void;
                                                    
}