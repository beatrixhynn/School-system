
        import { Injectable } from '@angular/core';
        import { HttpClient } from '@angular/common/http';
        import { environment } from '../../../environment/environment';
        import { Observable } from 'rxjs';
        import { SchoolMealModel } from '../interfaces/school-meal-model.interface';
        
        import { SchoolMealForm } from '../interfaces/school-meal-form.interface';
        import { SchoolMealFormUpdate } from '../interfaces/school-meal-form-update.interface';

        const URL_API = `${environment.apiEndpoint}/school-meals`


        @Injectable({
        providedIn: 'root'
        })
        export class SchoolMealService {

        constructor(private http : HttpClient) { }

            public getAll() : Observable<SchoolMealModel[]>{
                return this.http.get<SchoolMealModel[]>(URL_API)
            }

            public findById(id : number) : Observable<SchoolMealModel>{
                return this.http.get<SchoolMealModel>(`${URL_API}/${id}` )
            }
            
            public create(schoolMealForm : SchoolMealForm){
                return this.http.post(URL_API, schoolMealForm)
            }

            public update(id : number, schoolMealFormUpdate : SchoolMealFormUpdate){
                return this.http.put(`${URL_API}/${id}`, schoolMealFormUpdate)
            }

            public deleteById(id : number){
                return this.http.delete(`${URL_API}/${id}` )
            }
        }