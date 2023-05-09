import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/types/Customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.sass'],
})
export class CustomersComponent implements OnInit {
  constructor(private customersService: CustomerService) {}
  customers: Customer[] = [];

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customersService.getCustomers().subscribe(data => {
      this.customers = data;
    })
  }
}
