import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactModel } from '../interfaces/contact-model.interface';
import { ContactForm } from '../interfaces/contact-form.interface';


const URL_API = '/api/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<ContactModel[]> {
    return this.http.get<ContactModel[]>(URL_API);
  }

  create(contact: ContactForm) {
    return this.http.post(URL_API, contact);
  }

}