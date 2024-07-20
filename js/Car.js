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
        if(this.engineIsOn !== false) {
            return 'Variklis yra įjungtas.'
        } else {
            return 'Įjungto variklio negalima įjungti dar kartą, sugadinsite starterį!';
        }
    }

    isjungtiVarikli () {
        if (this.engineIsOn === false) {
            return 'Variklis yra išjungtas, dar kartą to padaryti negalima.';
        } else {
            return 'Variklis yra išjungtas.'
        }
    }

    pradetiVaziuoti() {
        if (this.engineIsOn !== false) {
            return 'Pradėti važiuoti negalime, kol variklis yra neįjungtas.';
        } else {
            this.speed = 20;
            return `Automobilis juda ${this.speed}km/h. Kuro sąnaudos yra ${this.averageFuelConsumptionLitres * 2}l/100km.`;
        } 
    }
    
    vaziuoti() {
        if (this.speed > 0) {
            return `Automobilis važiuoja. Vidutinės kuro sąnaudos yra ${this.averageFuelConsumptionLitres}l/100km.`;
        }
        this.speed < 0;
        return 'Automobilis stovi vietoje.';
    }

    sustoti() {
        if(this.speed === 0) {
        return `Automobilis sustojo, nes jo greitis yra ${this.speed}km/h.`;
        }
    }

    likesKuras() {
        return `Kuro likutis bake yra ${this.fuelTankCapacityLitres - this.averageFuelConsumptionLitres}l.`        
    }

    kuroPapildymas() {
        if (this.engineIsOn === true) {
            return `Prieš pildami kurą išjunkite automobilio variklį.`;
        } else {
            return `Automobilio variklis išjungtas, galime saugiai pildyti kuro baką.`;
        }
        
    }




    


}