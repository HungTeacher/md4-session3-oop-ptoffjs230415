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
var Rikkei = /** @class */ (function () {
    function Rikkei(taxCode) {
        this.taxCode = taxCode;
        this.skateholder = [{ name: "Minh Hung", share: "100%" }];
    }
    Rikkei.prototype.showTaxCode = function () {
        console.log("Rikkei Tax Code is ".concat(this.taxCode));
    };
    return Rikkei;
}());
var DerivedRikkei = /** @class */ (function (_super) {
    __extends(DerivedRikkei, _super);
    function DerivedRikkei(taxCode) {
        return _super.call(this, taxCode) || this;
    }
    DerivedRikkei.prototype.payTaxes = function (taxCode) {
        console.log("Taxes paid by Rikkei ".concat(taxCode));
    };
    return DerivedRikkei;
}(Rikkei));
//create an instance of the derived class
var rikkeiInstance = new DerivedRikkei("123456");
//Call abstract method
rikkeiInstance.payTaxes("300");
var Animals = /** @class */ (function () {
    function Animals() {
    }
    Animals.prototype.move = function () {
        console.log("Animal is moving");
    };
    return Animals;
}());
var Dogs = /** @class */ (function (_super) {
    __extends(Dogs, _super);
    function Dogs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dogs.prototype.makeSound = function () {
        console.log("Dog parks");
    };
    return Dogs;
}(Animals));
var Cats = /** @class */ (function (_super) {
    __extends(Cats, _super);
    function Cats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cats.prototype.makeSound = function () {
        console.log("Cat meows");
    };
    return Cats;
}(Animals));
var dog = new Dogs();
dog.makeSound();
dog.move();
var cat = new Cats();
cat.makeSound();
cat.move();
var RA = /** @class */ (function () {
    function RA(name) {
        this.name = name;
    }
    RA.prototype.marketing = function () {
        console.log("Doing marketing");
    };
    RA.prototype.sale = function () {
        console.log("Doing sale");
    };
    return RA;
}());
var rk = new RA("phong thanh cong");
rk.marketing();
var parrots = {
    name: "Polly",
    eat: function () {
        console.log("".concat(this.name, " is eating"));
    },
    fly: function () {
        console.log("".concat(this.name, " is flying"));
    }
};
parrots.eat();
parrots.fly();
var p1 = { name: "Minh Hung", age: 18 };
var p2 = { name: "Hien", age: 19 };
console.log(p1, p2);
