import { Car } from "./Car.js"; 

const audi = new Car('Audi', '80', 'Geltona', 66, 5.2);
console.log(audi);

console.log(audi.name);
console.log(audi.model);
console.log(audi.color);
console.log(audi.fuelTankCapacityLitres);
console.log(audi.averageFuelConsumptionLitres);
console.log(audi.engineIsOn);
console.log(audi.speed);
console.log(audi.fuelLeft);

console.log(audi.ijungtiVarikli());
console.log(audi.isjungtiVarikli());
console.log(audi.pradetiVaziuoti());
console.log(audi.vaziuoti());
console.log(audi.sustoti());
console.log(audi.likesKuras());
console.log(audi.kuroPapildymas(20));
console.log(audi.likesKuras());