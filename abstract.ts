abstract class Rikkei {
    private taxCode: string;
    private skateholder: any[];

    constructor(taxCode: string) {
        this.taxCode = taxCode;
        this.skateholder = [{name: "Minh Hung", share: "100%"}]
    }
    private showTaxCode() {
        console.log(`Rikkei Tax Code is ${this.taxCode}`)
    }
    abstract payTaxes(taxCode: string): void
}
class DerivedRikkei extends Rikkei {
    constructor(taxCode: string) {
        super(taxCode)
    }
    payTaxes(taxCode: string) {
        console.log(`Taxes paid by Rikkei ${taxCode}`)
    }

}
//create an instance of the derived class
const rikkeiInstance = new DerivedRikkei("123456")

//Call abstract method
rikkeiInstance.payTaxes("300")

abstract class Animals {
    abstract makeSound(): void

    move(): void {
        console.log("Animal is moving")
    }
}

class Dogs extends Animals {
    makeSound() {
        console.log("Dog parks")
    }
}
class Cats extends Animals {
    makeSound() {
        console.log("Cat meows")
    }
}
const dog = new Dogs()
dog.makeSound()
dog.move()

const cat = new Cats()
cat.makeSound()
cat.move()

interface Sales {
    name: string;
    sale(): void
}
interface Marketing {
    name: string;
    marketing(): void
}

class RA implements Sales, Marketing {
    public name: string;
    constructor(name : string) {
        this.name = name
    }
    marketing() {
        console.log("Doing marketing")
    }
    sale() {
        console.log("Doing sale")
    }
}
const rk = new RA("phong thanh cong")
rk.marketing()

interface Animal {
    name: string;
    eat(): void
}
interface Bird extends Animal {
    fly(): void
}
const parrots : Bird = {
    name : "Polly",
    eat(){
        console.log(`${this.name} is eating`)
    },
    fly() {
        console.log(`${this.name} is flying`)
    }
}
parrots.eat()
parrots.fly()

interface Persons {
    name: string;
    age: number
}
type Human = {
    name: string;
    age: number
}
let p1: Persons = { name: "Minh Hung", age: 18}
let p2: Human = {name: "Hien", age: 19}
console.log(p1,p2)