import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Customer } from '../types/Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  URL: string = '';

  // constructor(private http: HttpClient) {}
  constructor() {}

  // getCustomers2(): Observable<any> {
  //   return this.http.get<Customer[]>(this.URL);
  // }

  getCustomers() {
    return [
      {
        id: '1',
        name: 'Gabriel Cornejo',
        documentType: 'CC',
        documentNumber: '123456789',
        birthDate: new Date('2001-03-07').toISOString(),
        age: 22,
        address: 'casita',
        email: 'gabrielcornejo@mail.com',
        phone: 311123456,
        remainingDays: 10,
        emergencyContact: {
          name: 'persona',
          email: 'correo@mail.com',
          phone: '123456789',
          relationship: 'es complicado',
        },
        medicInformation: {
          weight: 1,
          height: 1,
          gender: 'H',
          diseases: ['uno', 'dos', 'tres'],
        },
      },
      {
        id: '2',
        name: 'Juan Esteban Galeano Herrera',
        documentType: 'CC',
        documentNumber: '987654321',
        birthDate: new Date().toISOString(),
        age: 22,
        address: 'casita',
        email: 'galrepre@mail.com',
        phone: 322222222,
        remainingDays: 10,
        emergencyContact: {
          name: 'persona',
          email: 'correo@mail.com',
          phone: '123456789',
          relationship: 'a',
        },
        medicInformation: {
          weight: 1,
          height: 1,
          gender: 'H',
          diseases: ['uno', 'dos', 'tres'],
        },
      },
    ];
  }
}
