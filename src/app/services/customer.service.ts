import { Injectable } from '@angular/core';
import { Customer } from '../types/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  getCustomers() {
    return[
      {
        id: 1,
        name: "Gabriel Cornejo",
        documentType: "CC",
        document: "123456789",
        age: 22,
        email: "gabrielcornejo@mail.com",
        cellphone: "311123456"
      },
      {
        id: 2,
        name: "Juan Esteban Galeano Herrera",
        documentType: "CC",
        document: "987654321",
        age: 22,
        email: "galrepre@mail.com",
        cellphone: "322222222"
      }
    ]
  }
}
