abstract class Figure {
   public abstract name: string;
  abstract calculateArea(): number;
}

class Circle extends Figure {
  public override name: string;
  private _radius: number;


  constructor(radius: number) {
    super();
    this._radius = radius;
    this.name = "Circle";
  }

  override calculateArea(): number {
    
    return 2 * Math.PI * this._radius ** 2;
  }
}

class Triangle extends Figure {
   public name: string;
  private _base: number;
  private _height: number;
  constructor(base: number, height: number) {
    super();
    this.name = "Triangle";
    this._base = base;
    this._height = height;
  }

  calculateArea(): number {
       return  (this._base / 2) * this._height;
  }
}

class Program {
  private shapes: Array<Figure>;
  constructor(...shapes: Figure[]) {
    this.shapes = shapes;
  }

  public printShapesArea(): void {
    this.shapes.forEach((figure) => {
      figure.calculateArea();
      console.log(`The area of ${figure.name} is ${ figure.calculateArea().toFixed(2)}`);
    });
  }
}

const triangle = new Triangle(20, 30);
const circle = new Circle(15);
const app = new Program(triangle, circle);
app.printShapesArea();
