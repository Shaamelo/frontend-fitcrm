import { Component, Input } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/types/Customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.sass'],
})
export class CustomerComponent {
  @Input() customer: Customer = {} as Customer;

  constructor(private customersService: CustomerService){}

  deleteCustomer() {
    if (this.customer.id) {

      this.customersService.deleteCustomer(this.customer.id).subscribe(res => {
        console.log(res);
        alert("Usuario eliminado con exito");
      })
    }
  } 
}
