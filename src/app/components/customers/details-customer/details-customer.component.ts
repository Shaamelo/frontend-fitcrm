import { CustomerService } from './../../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/types/Customer';

@Component({
  selector: 'app-details-customer',
  templateUrl: './details-customer.component.html',
  styleUrls: ['./details-customer.component.sass'],
})
export class DetailsCustomerComponent implements OnInit {
  id: string | null;

  customer: Customer = {} as Customer;

  constructor(
    private aRoute: ActivatedRoute,
    private customersService: CustomerService
  ) {
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.getCustomerInfo();
  }

  getCustomerInfo() {
    if (this.id !== null) {
      this.customersService.getCustomerInfo(this.id).subscribe(data => {
        console.log(data);
        this.customer = data;
      })
    }
  }
}
