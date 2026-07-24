
        import { Injectable } from '@angular/core';
        import { HttpClient } from '@angular/common/http';
        import { environment } from '../../../environment/environment';
        import { Observable } from 'rxjs';
        import { GradeModel } from '../interfaces/grade-model.interface';
        
        import { GradeForm } from '../interfaces/grade-form.interface';
        import { GradeFormUpdate } from '../interfaces/grade-form-update.interface';

        const URL_API = `${environment.apiEndpoint}/grades`


        @Injectable({
        providedIn: 'root'
        })
        export class GradeService {

        constructor(private http : HttpClient) { }

            public getAll() : Observable<GradeModel[]>{
                return this.http.get<GradeModel[]>(URL_API)
            }

            public findById(id : number) : Observable<GradeModel>{
                return this.http.get<GradeModel>(`${URL_API}/${id}` )
            }
            
            public create(gradeForm : GradeForm){
                return this.http.post(URL_API, gradeForm)
            }

            public update(id : number, gradeFormUpdate : GradeFormUpdate){
                return this.http.put(`${URL_API}/${id}`, gradeFormUpdate)
            }

            public deleteById(id : number){
                return this.http.delete(`${URL_API}/${id}` )
            }
        }