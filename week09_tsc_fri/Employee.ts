import IPerson from "./IPerson";
 
export default class Employee implements IPerson {
    constructor(
        public id: number,
        public name: string,
        public gender: string,
        public city: string,
        public designation: string
    ) {}

    print() {
        console.log(`Employee Id: ${this.id}`);
        console.log(`Employee Name: ${this.name}`);
        console.log(`Employee Gender: ${this.gender}`);
        console.log(`Employee City: ${this.city}`);
        console.log(`Employee Designation: ${this.designation}`);
    }
}