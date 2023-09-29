var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(type) {
        this.type = type;
    }
    Object.defineProperty(Animal.prototype, "getType", {
        get: function () {
            return this.type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "setType", {
        set: function (type) {
            this.type = type;
        },
        enumerable: false,
        configurable: true
    });
    Animal.prototype.sound = function () {
        console.log("This is animal sound");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, gender) {
        var _this = _super.call(this, "pitbull") || this;
        _this.name = name;
        _this.gender = gender;
        return _this;
    }
    Dog.prototype.sound = function () {
        _super.prototype.sound.call(this);
        console.log("Wof Woff.....!!!");
    };
    Dog.prototype.introduce = function () {
        console.log("This is ".concat(this.name, ". I am a ").concat(this.gender ? "male" : "female", " dog"));
    };
    return Dog;
}(Animal));
var myDog = new Dog("Buddy", true);
myDog.introduce();
myDog.sound();
myDog.setType = "Golden Retriever";
console.log("My dog's type is ".concat(myDog.getType));
