export class Car {
    constructor(pavadinimas, modelis, spalva) {
        this.name = pavadinimas;
        this.model = modelis;
        this.color = spalva;
        this.fuelTankCapacityLitres = 66;
        this.averageFuelConsumptionLitres = 5.2;
        this.engineIsOn = false; 
        this.speed = 0;
        /*this.fuelLeft = kuroLikutis; */
    }


    ijungtiVarikli() {
        if(this.engineIsOn === true) {
            return 'Įjungto variklio negalima įjungti dar kartą, sugadinsite starterį!';
        } 
        this.engineIsOn === true; 
            return 'Variklis yra įjungtas.'
    }

    isjungtiVarikli () {
        if (this.engineIsOn === false) {
            return 'Variklis yra išjungtas, dar kartą to padaryti negalima.';
        } 
        this.engineIsOn === false;
            return 'Variklis yra išjungtas.'
    }

    pradetiVaziuoti() {
        if (this.engineIsOn !== false) {
            return 'Pradėti važiuoti negalime, kol variklis yra neįjungtas.';
        }
        this.speed = 20;
            return `Automobilis juda ${this.speed}km/h. Kuro sąnaudos yra ${this.averageFuelConsumptionLitres * 2}l/100km.`;
    }
    
    vaziuoti() {
        if (this.speed > 0) {
            return `Automobilis važiuoja. Vidutinės kuro sąnaudos yra ${this.averageFuelConsumptionLitres}l/100km.`;
        }
        this.speed < 0;
        return 'Automobilis stovi vietoje.';
    }

    sustoti() {
        this.speed = 0;
        return `Automobilis sustojo, nes jo greitis yra ${this.speed}km/h.`;
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