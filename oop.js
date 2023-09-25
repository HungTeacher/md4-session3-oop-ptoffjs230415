var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
    }
    //methods
    Department.prototype.describe = function () {
        console.log("This is ".concat(this.name, " Department with id: ").concat(this.id));
    };
    return Department;
}());
var educationDepartment = new Department("1", "Education");
console.log(educationDepartment);
var accounting = {
    describe: educationDepartment.describe.bind({ id: "2", name: "Accounting" })
};
accounting.describe();
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "age", {
        //getter và setter cho phép kiếm soát quyền truy cập vào các thuộc tính của lớp
        //getter trả về gía trị thuọc tính, bắt đầu với từ khoá get
        get: function () {
            return this._age;
        },
        //setter cập nhật giá trị thuọc tính, bắt đầu với từ khoá là set
        set: function (theAge) {
            if (theAge <= 0 || theAge >= 200) {
                throw new Error('The age is invalid');
            }
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.getFullName = function () {
        return "".concat(this._firstName, " ").concat(this._lastName);
    };
    return Person;
}());
var newPerson = new Person();
var newPerson2 = new Person();
/*newPerson2.age = 0*/ //getter với age được gọi
// newPerson.age = 26
// console.log(newPerson2)
var Student = /** @class */ (function () {
    function Student(name, id, friends) {
        if (id === void 0) { id = Date.now(); }
        if (friends === void 0) { friends = []; }
        this.id = id;
        this.name = name;
        this.friends = friends;
    }
    Student.prototype.addFriend = function (newFriend) {
        this.friends.push(newFriend);
    };
    //define methods deleteFriend với tham số id truyền vào
    Student.prototype.deleteFriend = function (friendId) {
        /* const newFriend = this.friends.findIndex(num => num.id == friendId)
         if(newFriend !== -1 ) {
             const friend = this.friends.splice(newFriend, 1)
             console.log(`đã xoá friend: ${newFriend}`)
         } else {
             console.log(`mảng còn lại khi chưa xoá: ${this.friends}`)
         }*/
        this.friends = this.friends.filter(function (f) { return f.id !== friendId; });
    };
    return Student;
}());
var userOne = new Student("User one");
var userTwo = new Student("User two", 5);
var userThree = new Student("User Three");
userOne.addFriend(userTwo);
userOne.addFriend(userThree);
console.log("user one ban đầu: ", userOne);
userOne.deleteFriend(5);
console.log("userOne sau khi xoá user two", userOne);
