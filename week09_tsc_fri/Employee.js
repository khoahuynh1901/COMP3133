"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(id, name, gender, city, designation) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.city = city;
        this.designation = designation;
    }
    Employee.prototype.print = function () {
        console.log("Employee Id: ".concat(this.id));
        console.log("Employee Name: ".concat(this.name));
        console.log("Employee Gender: ".concat(this.gender));
        console.log("Employee City: ".concat(this.city));
        console.log("Employee Designation: ".concat(this.designation));
    };
    return Employee;
}());
exports.default = Employee;
