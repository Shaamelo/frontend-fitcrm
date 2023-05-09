import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/types/Customer';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.sass']
})
export class SendMessageComponent implements OnInit {
  form: FormGroup;
  customers: Customer[] = [];
  constructor(private fb: FormBuilder, private customersService: CustomerService) {
    this.form = this.fb.group({
      type: ['', Validators.required],
      target: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.getCustomers();
  }
  sendMessage() {
    alert("Mensaje enviado con exito");
    this.form.reset();
  }
  getCustomers(): void {
    this.customersService.getCustomers().subscribe(data => {
      this.customers = data;
    })
  }
}
