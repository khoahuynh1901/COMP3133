"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var FullTimeEmployee_1 = require("./FullTimeEmployee");
console.log("welcome to typescript program");
var a = 100; //Number
console.log(a);
// a = "Hello"
var b = "hello world";
var c = false;
var d;
d = 200;
var e;
var f;
//any unknown null union intesect
var z; // union 
z = "hello";
z = 100;
// z = true //error
var person1 = {
    id: 1,
    name: "Pritesh",
    gender: "Male",
    city: "Toronto"
};
var e1 = new Employee_1.default(1, "Khoa Huynh", "Male", "TOR", "Student");
e1.print();
var home = {
    streetNo: 123,
    streetName: "York St",
    city: "TOR",
    country: "CA",
    lat: 122.56,
    lng: 345.70,
    alt: 300
};
console.log(home);
var fe1 = new FullTimeEmployee_1.default(1, "Khoa Huynh", "Male", "TOR", "Student", 'Full time');
console.log(fe1);
//enum
var Status;
(function (Status) {
    Status[Status["PR"] = 100] = "PR";
    Status["CITIZEN"] = "Citizen";
    Status[Status["WORK_PERMIT"] = 200] = "WORK_PERMIT";
    Status[Status["STUDENT"] = 100] = "STUDENT";
})(Status || (Status = {}));
var ee1 = Status.CITIZEN;
//Unkwon 
var x;
x = 100;
x = "hello";
x = true;
if (typeof x == "string") {
    console.log(x.toUpperCase());
}
