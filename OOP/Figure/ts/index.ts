abstract class Figure {
  public abstract area: number;
  public abstract name: string;
  abstract calculateArea(): number;
}

class Circle extends Figure {
  public override name: string;
  private _radius: number;
  override area: number = 0;

  constructor(radius: number) {
    super();
    this._radius = radius;
    this.name = "Circle";
  }

  override calculateArea(): number {
    this.area = 2 * Math.PI * this._radius ** 2;
    return this.area;
  }
}

class Triangle extends Figure {
  override area: number = 0;
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
    this.area = (this._base / 2) * this._height;
    return this.area;
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
      console.log(`The area of ${figure.name} is ${figure.area.toFixed(2)}`);
    });
  }
}

const triangle = new Triangle(20, 30);
const circle = new Circle(15);
const app = new Program(triangle, circle);
app.printShapesArea();
