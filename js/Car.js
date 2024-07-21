export class Car {
    constructor(pavadinimas, modelis, spalva, kuroBakoTalpa, vidKuroSanaudos) {
        this.name = pavadinimas;
        this.model = modelis;
        this.color = spalva;
        this.fuelTankCapacityLitres = kuroBakoTalpa;
        this.averageFuelConsumptionLitres = vidKuroSanaudos;
        this.engineIsOn = false;
        this.speed = 0;
        this.fuelLeft = kuroBakoTalpa; 
    }

    ijungtiVarikli() {
        if (this.engineIsOn) {
            return 'Įjungto variklio negalima įjungti dar kartą, sugadinsite starterį!';
        } 
        this.engineIsOn = true;
        return 'Variklis yra įjungtas.';
    }

    isjungtiVarikli () {
        if (!this.engineIsOn) {
            return 'Variklis yra išjungtas, dar kartą to padaryti negalima.';
        }
        this.engineIsOn = false;
        return 'Variklis yra išjungtas.';
    }

    pradetiVaziuoti() {
        if (this.engineIsOn) {
            return 'Pradėti važiuoti negalime, kol variklis yra neįjungtas.';
        }
        this.speed = 20;
        this.fuelLeft -= this.averageFuelConsumptionLitres * 0.2; 
        return `Automobilis juda ${this.speed}km/h. Kuro sąnaudos yra ${this.averageFuelConsumptionLitres * 2}l/100km.`;
    }
    
    vaziuoti() {
        if (this.speed > 0) {
            return `Automobilis važiuoja. Vidutinės kuro sąnaudos yra ${this.averageFuelConsumptionLitres}l/100km.`;
        } else {
            return 'Automobilis stovi vietoje.';
        }        
    }

    sustoti() {
        this.speed = 0;
        return `Automobilis sustojo, nes jo greitis yra ${this.speed}km/h.`;
    }

    likesKuras() {
        return `Kuro likutis bake yra ${this.fuelLeft.toFixed(2)}l.`;      
    }

    kuroPapildymas(kiekis) {
        if (this.engineIsOn) {
            return 'Prieš pildami kurą išjunkite automobilio variklį.';
        }
        if (kiekis <= 0) {
            return 'Kuro kiekis turi būti teigiamas skaičius.';
        }
        if (this.fuelLeft + kiekis > this.fuelTankCapacityLitres) {
            let maksimalusPapildomasKiekis = (this.fuelTankCapacityLitres - this.fuelLeft).toFixed(2);
            this.fuelLeft = this.fuelTankCapacityLitres; 
            return `Kuro bakas perpildytas. Maksimalus papildomas kiekis: ${maksimalusPapildomasKiekis}l.`;
        }
        this.fuelLeft += kiekis;
        return `Kuro bakas papildytas. Dabar kuro likutis yra ${this.fuelLeft}l.`;
    }
}