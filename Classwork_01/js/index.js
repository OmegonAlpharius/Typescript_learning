"use strict";
let isDone = false;
let decimal = 6, hex = 0xf00d, binary = 0b1010, octal = 0o744;
let personName = "Gena";
let personJob = "Manager";
let message = `Hello my name is ${personName} and I'm a ${personJob}`;
// const names: string[] = ["Вася", "Петя", "Боб", "Саша"];
const names = ["Вася", "Петя", "Боб", "Саша"];
// const nameAndAge: [string, number] = ["Вася", 15];
// Объявление типа tuple
let nameAndAge;
// Его инициализация
nameAndAge = ["Вася", 15]; // OK
// Некорректная инициализация вызовет ошибку
// nameAndAge = [15, "Вася"]; // Error
nameAndAge[0].toUpperCase(); // OK
// nameAndAge[1].toUpperCase(); // Error, 'number' does not have 'toUpperCase
console.log(names);
class Lamp {
    constructor(brightness) {
        this._brightness = brightness;
    }
    turnOff() { }
    tUrnOn() { }
}
const lamp = new Lamp(2);
console.log(`lamp brightness is equal to ${lamp._brightness}`);
class AreaCalculator {
    static areaOfCircle(radius) {
        return this.PI * radius ** 2;
    }
    static areaOfTriangle(baseLength, height) {
        return 0.5 * (baseLength * height);
    }
    static areaOfRectangle(width, height) {
        return width * height;
    }
}
AreaCalculator.PI = Math.PI;
let radius = 29, circleArea = AreaCalculator.areaOfCircle(radius);
let baseLength = 43, triangleHeight = 30, triangleArea = AreaCalculator.areaOfTriangle(baseLength, triangleHeight);
let width = 24, rectangleHeight = 54, rectangleArea = AreaCalculator.areaOfRectangle(width, rectangleHeight);
console.log(`Area of circle: ${circleArea}`);
console.log(`Area of triangle: ${triangleArea}`);
console.log(`Area of circle: ${rectangleArea}`);
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
}
const rectangle = new Rectangle(3, 5);
console.log(`rectangle.height: ${rectangle.height}`);
console.log(`rectangle width: ${rectangle.width}`);
rectangle.height = 25;
rectangle.width = 222;
console.log(`rectangle.height: ${rectangle.height}`);
console.log(`rectangle width: ${rectangle.width}`);
//# sourceMappingURL=index.js.map