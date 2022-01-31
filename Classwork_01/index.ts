let isDone: boolean = false;

let decimal: number = 6,
  hex: number = 0xf00d,
  binary: number = 0b1010,
  octal: number = 0o744;

let personName: string = "Gena";
let personJob: string = "Manager";
let message: string = `Hello my name is ${personName} and I'm a ${personJob}`;

// const names: string[] = ["Вася", "Петя", "Боб", "Саша"];

const names: Array<string> = ["Вася", "Петя", "Боб", "Саша"];

// const nameAndAge: [string, number] = ["Вася", 15];

// Объявление типа tuple
let nameAndAge: [string, number];
// Его инициализация
nameAndAge = ["Вася", 15]; // OK
// Некорректная инициализация вызовет ошибку
// nameAndAge = [15, "Вася"]; // Error

nameAndAge[0].toUpperCase(); // OK
// nameAndAge[1].toUpperCase(); // Error, 'number' does not have 'toUpperCase

console.log(names);

class Lamp {
  _brightness: number;

  constructor(brightness: number) {
    this._brightness = brightness;
  }

  private turnOff(): void {}
  private tUrnOn(): void {}
}

const lamp = new Lamp(2);

console.log(`lamp brightness is equal to ${lamp._brightness}`);

class AreaCalculator {
  public static PI: number = Math.PI;

  public static areaOfCircle(radius: number) {
    return this.PI * radius ** 2;
  }

  public static areaOfTriangle(baseLength: number, height: number) {
    return 0.5 * (baseLength * height);
  }

  public static areaOfRectangle(width: number, height: number) {
    return width * height;
  }
}

let radius: number = 29,
  circleArea: number = AreaCalculator.areaOfCircle(radius);

let baseLength: number = 43,
  triangleHeight: number = 30,
  triangleArea: number = AreaCalculator.areaOfTriangle(baseLength, triangleHeight);

let width: number = 24,
  rectangleHeight: number = 54,
  rectangleArea: number = AreaCalculator.areaOfRectangle(width, rectangleHeight);

console.log(`Area of circle: ${circleArea}`);
console.log(`Area of triangle: ${triangleArea}`);
console.log(`Area of circle: ${rectangleArea}`);

class Rectangle {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }
  public get height(): number {
    return this._height;
  }
  public set height(value: number) {
    this._height = value;
  }
  public get width(): number {
    return this._width;
  }
  public set width(value: number) {
    this._width = value;
  }
}

const rectangle: Rectangle = new Rectangle(3, 5);

console.log(`rectangle.height: ${rectangle.height}`);
console.log(`rectangle width: ${rectangle.width}`);

rectangle.height = 25;
rectangle.width = 222;

console.log(`rectangle.height: ${rectangle.height}`);
console.log(`rectangle width: ${rectangle.width}`);
