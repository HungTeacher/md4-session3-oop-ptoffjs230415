class Department {
    private id: string;
    private name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name
    }
    //methods
    describe() {
        console.log(`This is ${this.name} Department with id: ${this.id}`)
    }
}
let educationDepartment = new Department("1", "Education")
console.log(educationDepartment)

let accounting = {
    describe: educationDepartment.describe.bind({ id: "2", name: "Accounting"})
}
accounting.describe()

class Person {
   /* public age: number;
    public firstName: string;
    public lastName: string;*/
    private _age: number;
    private _firstName: string;
    private _lastName: string;

    //getter và setter cho phép kiếm soát quyền truy cập vào các thuộc tính của lớp
    //getter trả về gía trị thuọc tính, bắt đầu với từ khoá get
    public get age() {
        return this._age
    }
    //setter cập nhật giá trị thuọc tính, bắt đầu với từ khoá là set
    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid')
        }
        this._age = theAge;
    }
    public getFullName(): string {
        return `${this._firstName} ${this._lastName}`
    }
}
let newPerson = new Person()
let newPerson2 = new Person()
/*newPerson2.age = 0*/ //getter với age được gọi
// newPerson.age = 26
// console.log(newPerson2)

class Student {
    id: number;
    name: string;
    friends: Student[]
    constructor(name: string, id: number = Date.now(), friends: Student[] = []) {
        this.id = id;
        this.name = name;
        this.friends = friends;
    }
    addFriend(newFriend: Student) {
        this.friends.push(newFriend)
    }

    //define methods deleteFriend với tham số id truyền vào
    deleteFriend(friendId: number):void {
       /* const newFriend = this.friends.findIndex(num => num.id == friendId)
        if(newFriend !== -1 ) {
            const friend = this.friends.splice(newFriend, 1)
            console.log(`đã xoá friend: ${newFriend}`)
        } else {
            console.log(`mảng còn lại khi chưa xoá: ${this.friends}`)
        }*/
        this.friends = this.friends.filter(f => f.id !== friendId)
    }
}
let userOne = new Student("User one")
let userTwo = new Student("User two", 5)
let userThree = new Student("User Three")

userOne.addFriend(userTwo)
userOne.addFriend(userThree)
console.log("user one ban đầu: ", userOne)
userOne.deleteFriend(5)
console.log("userOne sau khi xoá user two", userOne)