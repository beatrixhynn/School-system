
        import { Injectable } from '@angular/core';
        import { HttpClient } from '@angular/common/http';
        import { environment } from '../../../environment/environment';
        import { Observable } from 'rxjs';
        import { TeacherModel } from '../interfaces/teacher-model.interface';
        
        import { TeacherForm } from '../interfaces/teacher-form.interface';
        import { TeacherFormUpdate } from '../interfaces/teacher-form-update.interface';

        const URL_API = `${environment.apiEndpoint}/teachers`


        @Injectable({
        providedIn: 'root'
        })
        export class TeacherService {

        constructor(private http : HttpClient) { }

            public getAll() : Observable<TeacherModel[]>{
                return this.http.get<TeacherModel[]>(URL_API)
            }

            public findById(id : number) : Observable<TeacherModel>{
                return this.http.get<TeacherModel>(`${URL_API}/${id}` )
            }
            
            public create(teacherForm : TeacherForm){
                return this.http.post(URL_API, teacherForm)
            }

            public update(id : number, teacherFormUpdate : TeacherFormUpdate){
                return this.http.put(`${URL_API}/${id}`, teacherFormUpdate)
            }

            public deleteById(id : number){
                return this.http.delete(`${URL_API}/${id}` )
            }
        }