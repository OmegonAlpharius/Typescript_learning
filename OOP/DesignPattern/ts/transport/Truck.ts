import ITransport from "./Transport";


class Truck implements ITransport {
    transfer(country: string, transferItems: string[]): void {
        console.log('Груз поехал по суше на грузовике');
        
    }
}
export default Truck