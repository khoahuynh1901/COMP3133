import Employee from "./Employee";
export default class FullTimeEmplouyee extends Employee{
    empType: string
    constructor(id: number,
         name: string,
         gender: string,
         city: string,
         designation: string, emType: string){
            super(id, name, gender, city, designation)
            this.empType = emType
        }
        override print(){
            super.print()
            console.log(
                `Employee Type: ${this.empType}`
            )
        }
    

}
