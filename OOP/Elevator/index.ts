class Elevator {
  private _capacity: number;

  private _currentFloor: number;

  private _maxFloor: number;

  constructor(currentFloor: number, maxFloor: number = 18, capacity: number = 200) {
    this._currentFloor = currentFloor;
    this._capacity = capacity;
    this._maxFloor = maxFloor;
  }

  public get currentFloor(): number {
    return this._currentFloor;
  }
  public set currentFloor(value: number) {
    if (value <= this._maxFloor) {
      this._currentFloor = value;
    }
  }
  public get maxFloor(): number {
    return this._maxFloor;
  }
  public set maxFloor(value: number) {
    this._maxFloor = value;
  }

  private printFloor(): void {
    console.log(this.currentFloor);
  }

  private isAllowableWeight(weight: number): boolean {
    return weight <= this._capacity;
  }
  private isAllowableFloor(floor: number): boolean {
    return floor <= this._maxFloor && floor > 0;
  }
  public move(toFloor: number, capacity: number): void {
    if (!this.isAllowableFloor(toFloor)) {
      console.log("invalid floor");
      return;
    }
    if (!this.isAllowableWeight(capacity)) {
      console.log("overweight");
      return;
    }
  }
}
