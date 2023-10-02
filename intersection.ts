type Admin = {
    name: string;
    privileges: string[]
}

type Employee = {
    name: string;
    startDate: Date
}

//interface ElevatedEmployee extends Employee, Admin

type ElevatedEmployee = Admin & Employee // Intersection Type

const el: ElevatedEmployee = {
    name: "Hung",
    privileges: ['developer'],
    startDate: new Date()
}
console.log("intersection type 1: ", el)

type Combinable = string | number; //Union Type
type Numeric = number | boolean; //Union Type

type Universal = Combinable & Numeric;

let testUniversal: Universal = 10;
console.log("intersection type of union type: ", testUniversal)
/*let testUniversal2: Universal = "10"; //Error */

/*Type Guards*/
function add(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b ==='string') {
        return a.toString() + b.toString()
    }
    return a + b
}
const res1 = add("3",4)
console.log("result: ", res1)

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges)
    }
    if ("startDate" in emp) {
        console.log("Start Date: " + emp.startDate)
    }
}
//create an admin object
const admin: Admin= {
    name: "admin",
    privileges: ["Access control"]
}
const employee: Employee = {
    name: "employee name",
    startDate: new Date()
}
const res2 = printEmployeeInformation(admin)

class Car {
    drive() {
        console.log("Driving...")
    }
}
class Truck {
    drive () {
        console.log("Driving a truck...")
    }
    loadCargo(amount: number) {
        console.log("Loading cargo..." + amount)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
    vehicle.drive()
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000)
    }
}
useVehicle(v1)
useVehicle(v2)

const userInputElement = <HTMLInputElement> (
    document.getElementById("user-input")
)