
class Cat {
    public name:string;
    public age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;

    }

    letPlay():void {

    }
    letFeed():void {
        
    }
    letTreat():void{

    }
}


class Game {
   private _pets:Cat[];

 
    constructor(){
        this._pets =[new Cat("Барсик",3)]
    }
    addPet(name:string,age:number):void{
        this._pets.push(new Cat(name,age))
    }
  
}