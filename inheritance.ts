class Animal {
    private type: string;

    constructor(type: string) {
        this.type = type
    }

    get getType() {
        return this.type
    }

    set setType(type: string) {
        this.type = type
    }

    sound() {
        console.log("This is animal sound")
    }

}

class Dog extends Animal {
    private name: string;
    private gender: boolean;

    constructor(name: string, gender: boolean) {
        super("pitbull");
        this.name = name;
        this.gender = gender;
    }

    override sound() {
        super.sound();
        console.log("Wof Woff.....!!!")
    }
    introduce() {
        console.log(
            `This is ${this.name}. I am a ${this.gender ? "male" : "female"} dog`
        )
    }
}
const myDog = new Dog("Buddy", true)
myDog.introduce()
myDog.sound()
myDog.setType = "Golden Retriever"
console.log(`My dog's type is ${myDog.getType}`)