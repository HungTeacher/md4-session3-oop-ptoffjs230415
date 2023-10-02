var el = {
    name: "Hung",
    privileges: ['developer'],
    startDate: new Date()
};
console.log("intersection type 1: ", el);
var testUniversal = 10;
console.log("intersection type of union type: ", testUniversal);
/*let testUniversal2: Universal = "10"; //Error */
/*Type Guards*/
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var res1 = add("3", 4);
console.log("result: ", res1);
function printEmployeeInformation(emp) {
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}
//create an admin object
var admin = {
    name: "admin",
    privileges: ["Access control"]
};
var employee = {
    name: "employee name",
    startDate: new Date()
};
var res2 = printEmployeeInformation(admin);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving...");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck...");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading cargo..." + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
var userInputElement = (document.getElementById("user-input"));
