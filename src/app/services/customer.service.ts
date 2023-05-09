import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../types/Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  URL: string = 'http://localhost:8080/customers';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<any> {
    return this.http.get<Customer[]>(this.URL);
  }

  getCustomerInfo(id: string): Observable<Customer> {
    return this.http.get<Customer>(this.URL + "/" + id);
  }

  createCustomer(customer: Customer): Observable<any> {
    return this.http.post(this.URL, customer);
  }

  updateCustomer(id: string, customer: Customer): Observable<any> {
    return this.http.put(this.URL + "/" + id, customer);
  }

  deleteCustomer(id: string): Observable<any> {
    return this.http.delete(this.URL + "/" + id);
  }
}
