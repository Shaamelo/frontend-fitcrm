import { Component, Input } from '@angular/core';
import { Customer } from 'src/app/types/Customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.sass'],
})
export class CustomerComponent {
  @Input() customer: Customer = {} as Customer;
}
