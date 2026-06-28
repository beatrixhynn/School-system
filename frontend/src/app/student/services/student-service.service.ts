
        import { Injectable } from '@angular/core';
        import { HttpClient } from '@angular/common/http';
        import { environment } from '../../../environment/environment';
        import { Observable } from 'rxjs';
        import { StudentModel } from '../interfaces/student-model.interface';
        
        import { StudentForm } from '../interfaces/student-form.interface';
        import { StudentFormUpdate } from '../interfaces/student-form-update.interface';

        const URL_API = `${environment.apiEndpoint}/students`


        @Injectable({
        providedIn: 'root'
        })
        export class StudentService {

        constructor(private http : HttpClient) { }

            public getAll() : Observable<StudentModel[]>{
                return this.http.get<StudentModel[]>(URL_API)
            }

            public findById(id : number) : Observable<StudentModel>{
                return this.http.get<StudentModel>(`${URL_API}/${id}` )
            }
            
            public create(studentForm : StudentForm){
                return this.http.post(URL_API, studentForm)
            }

            public update(id : number, studentFormUpdate : StudentFormUpdate){
                return this.http.put(`${URL_API}/${id}`, studentFormUpdate)
            }

            public deleteById(id : number){
                return this.http.delete(`${URL_API}/${id}` )
            }
        }