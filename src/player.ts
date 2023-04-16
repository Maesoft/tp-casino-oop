export class Player{
    private name:string;
    private age:number;
    private amount:number;
    
    public constructor(nombre:string, edad:number, saldoInicial:number){
        this.name=nombre;
        this.age=edad;
        this.amount=saldoInicial;
    }

    public getName():string{
        return this.name;
    }

    public getAge():number{
        return this.age;
    }
    public getAmount():number{
        return this.amount;
    }
    
    public setAmount(monto:number):void{
        this.amount=monto;
    }

}