abstract class Vehicle {
    abstract speedUp():void;
    abstract decelerate():void;
}

class Auto extends Vehicle {
    protected doors: number;
    protected date: string;
    protected brand: string;

    constructor(date: string, brand: string, doors: number) {
        super();
        this.date = date;
        this.brand = brand;
        this.doors = doors;
    }

    set setDate(date: string) {
        this.date = date;
    }

    get getDate(): string {
        return this.date;
    }

    set setBrand(brand: string) {
        this.brand = brand;
    }

    get getBrand(): string {
        return this.brand;
    }

    public speedUp = () => {
        console.log('Speed Up')
    }

    public decelerate = () => {
        console.log('Decelerate')
    }

}

const auto = new Auto('2020-01-01', 'Toyota', 4);

console.log(auto.getDate);

auto.setDate = '2017-02-01';

console.log(auto.getDate);

auto.speedUp();