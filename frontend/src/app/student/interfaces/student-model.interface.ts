import { GradeModel } from "../../grade/interfaces/grade-model.interface"

        
        export interface StudentModel {
            id : number
            name : string 
birthDate : Date 
parentName : string 
parentCellphone : string 
email : string 
grade : GradeModel 
         
        }