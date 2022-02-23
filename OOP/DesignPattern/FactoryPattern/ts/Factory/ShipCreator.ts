import Ship from "../transport/Ship";
import ITransport from "../transport/Transport";

import AbstractTransportCreator from "./AbstractTransportCreator";



class ShipCreator extends AbstractTransportCreator {
    public factoryMethod(): ITransport {
        return new Ship
    }
}

export default ShipCreator