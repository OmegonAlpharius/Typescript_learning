import ITransport from "./Transport";


class Ship implements ITransport {
    transfer(country: string, transferItems: string[]): void {
        console.log('Груз поехал по морю на карабле');
        
    }
}
export default Ship