interface IFigure {
  getArea: () => number;
}

interface ISquare {
  getSide: () => number;
}

interface IDoubleSquare extends IFigure {
  buildDOubleSquare: (square1: ISquare, square2: ISquare) => void;
}

abstract class AbstractDoubleSquare implements IDoubleSquare {
  protected area!: number;

  public abstract buildDOubleSquare(square1: ISquare, square2: ISquare): void;

  protected abstract calculateArea(): number;

  public getArea(): number {
    if (this.area === 0) {
      this.area = this.calculateArea();
    }
    return this.calculateArea();
  }
}

class Square implements ISquare {
  private _side: number;

  constructor(side: number) {
    this._side = side;
  }

  getSide(): number {
    return this._side;
  }
}

class DoubleSquare extends AbstractDoubleSquare {
  private _squares!: ISquare[];

  constructor() {
    super();
    this.area = 0;
  }

  public buildDOubleSquare(square1: ISquare, square2: ISquare): void {
    this._squares = [square1, square2];
  }
  protected calculateArea(): number {
    return this._squares.reduce((acc, square) => {
      return acc + square.getSide() ** 2;
    }, 0);
  }
}
const square1: Square = new Square(10);
const square2: Square = new Square(12);
const doubleSquare: DoubleSquare = new DoubleSquare();
doubleSquare.buildDOubleSquare(square1, square2);
console.log(`Площадь doublesquare = ${doubleSquare.getArea()}`);
