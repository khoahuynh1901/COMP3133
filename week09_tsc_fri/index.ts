import IPerson , {COUNTRY} from "./IPerson";
import Employee from "./Employee";
import FullTimeEmplouyee from "./FullTimeEmployee";

console.log("welcome to typescript program")
var a = 100 //Number
console.log(a)
// a = "Hello"
var b:string = "hello world"
var c: boolean = false
var d: number
d =  200

 
var e: any
var f:unknown

//any unknown null union intesect

var z : string | number  // union 
z = "hello"
z = 100

// z = true //error



var  person1:IPerson = {
    id: 1,
    name: "Pritesh",
    gender: "Male",
    city: "Toronto"
}


var e1: Employee = new Employee(1,
    "Khoa Huynh",
    "Male",
    "TOR",
    "Student"
)
e1.print()
type Address = {
    streetNo : number
    streetName : string
    city: string
    country: string

}
type Geo = {
    lat: number
    lng: number
    alt: number
}
//intersect
type HomeAddress =  Address & Geo
var home: HomeAddress = {
    streetNo : 123,
    streetName : "York St",
    city: "TOR",
    country: "CA",
    lat: 122.56,
    lng: 345.70,
    alt: 300
}
console.log(home)

var fe1 = new FullTimeEmplouyee(1, "Khoa Huynh", "Male", "TOR", "Student", 'Full time')
console.log(fe1)


//enum
enum Status{
    PR=100,
    CITIZEN= "Citizen",
    WORK_PERMIT = 200,
    STUDENT = 100
}

var ee1: Status = Status.CITIZEN

//Unkwon 
var x:unknown
x = 100
x = "hello"
x = true

if (typeof x == "string"){
    console.log(x.toUpperCase());
}