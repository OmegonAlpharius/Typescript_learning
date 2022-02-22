import ITransport from "../transport/Transport";

abstract class AbstractTransportCreator {
    public abstract factoryMethod():ITransport;

    public transfer (country:string,transferItems:string[]):void{
        const transport :ITransport = this.factoryMethod()

        transport.transfer(country, transferItems)
    }
}




export default AbstractTransportCreator