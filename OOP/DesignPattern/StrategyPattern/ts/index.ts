interface IStrategy {
    execute (a:number,b:number):number}


class  AddStrategy implements IStrategy {
    execute(a: number, b: number): number {
        return a + b
    }
}


class  SubStrategy implements IStrategy {
    execute(a: number, b: number): number {
        return a - b
    }
}

class Context {
    private __strategy!:IStrategy;

    public setStrategy(strategy:IStrategy):void{
        this.__strategy=strategy
    }

    constructor() {
        this.setStrategy(new AddStrategy())
    }
    execute(a:number,b:number):number{
        return this.__strategy.execute(a, b)
    }
}

let action = 'sub'
let context:Context = new Context()
console.log(context.execute(5, 10));
if (action==='add') {
    context.setStrategy(new AddStrategy())
    console.log(context.execute(5, 10));
}
else{
    context.setStrategy(new SubStrategy())
    console.log(context.execute(5, 10));
}


