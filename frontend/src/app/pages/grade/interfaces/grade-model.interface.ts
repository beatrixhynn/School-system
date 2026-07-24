import { TeacherModel } from "../../teacher/interfaces/teacher-model.interface"

        
        export interface GradeModel {
            id : number
            year : string 
section : string 
room : string 
teacher : TeacherModel 
         
        }