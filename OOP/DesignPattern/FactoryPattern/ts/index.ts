import AbstractTransportCreator from "./Factory/AbstractTransportCreator";
import ShipCreator from "./Factory/ShipCreator";
import TruckCreator from "./Factory/TruckCreator";


const clientCode = (creator:AbstractTransportCreator) => {
    const country ="USA"
    const goods = ["Золото","Брилианты","Серебро"]
    creator.transfer(country, goods)
}



console.log("Запуск морской перевозкой");
clientCode(new ShipCreator())
console.log("Запуск сухопутной перевозкой");
clientCode(new TruckCreator())