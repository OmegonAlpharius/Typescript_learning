const channels = ["KTK", "THT", "THT4", "XABAR24"];

class TV {
  private _chanelLimit: number;
  private _channels: Array<string>;
  private _currentChanel: number;

  constructor(currentChanel: number, channels: Array<string>) {
    this._currentChanel = currentChanel;
    this._chanelLimit = channels.length;
    this._channels = channels;
  }

  public set currentChanel(value: number) {
    if (value <= this._chanelLimit && value > 0) {
      this._currentChanel = value;
    } else {
      console.log("Invalid value, enter between 1 and " + this._chanelLimit);
    }
  }

  public get currentChanel(): number {
    return this._currentChanel;
  }

  public printChanel(): void {
    console.log(`Current channel: ${this.currentChanel} ${this._channels[this.currentChanel - 1]}`);
  }
  public nextChanel(): void {
    if (this.currentChanel < this._chanelLimit) {
      this.currentChanel++;
      this.printChanel();
    } else {
      this.currentChanel = 1;
      this.printChanel();
    }
  }
  public previousChannel(): void {
    if (this.currentChanel > 1) {
      this.currentChanel--;
      this.printChanel();
    } else {
      this.currentChanel = this._chanelLimit;
      this.printChanel();
    }
  }
  public moveToChanel(value: number): void {
    this.currentChanel = value;
    this.printChanel();
  }
}

const myTV: TV = new TV(2, channels);

myTV.printChanel();

myTV.previousChannel();
myTV.previousChannel();

myTV.nextChanel();
myTV.nextChanel();
myTV.nextChanel();
myTV.nextChanel();

myTV.moveToChanel(3);
