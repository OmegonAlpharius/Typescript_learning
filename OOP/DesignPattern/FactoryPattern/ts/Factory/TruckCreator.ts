import ITransport from "../transport/Transport";
import Truck from "../transport/Truck";
import AbstractTransportCreator from "./AbstractTransportCreator";



class TruckCreator extends AbstractTransportCreator {
    public factoryMethod(): ITransport {
        return new Truck
    }
}

export default TruckCreator