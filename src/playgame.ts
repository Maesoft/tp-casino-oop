export abstract class PlayGame {
    protected premio : number;
    
    constructor(){
        this.premio=0;
    }

    abstract play();
    abstract getCash();
                                                    
}